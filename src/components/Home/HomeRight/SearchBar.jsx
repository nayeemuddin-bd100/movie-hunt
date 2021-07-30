import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SEARCH_MOVIE } from '../../../Api_Config';
import { GlobalContext } from '../../../context/GlobalState';

function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();
    const { handleSearch } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchValue) {
            (async () => {
                try {
                    await axios.get(`${SEARCH_MOVIE}${searchValue}`).then((response) => {
                        if (searchValue) {
                            handleSearch(response.data.results);
                        }
                    });
                } catch (error) {
                    console.log(error.message);
                }
            })();
            history.push('/explore');
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                className="search-bar form-control"
                placeholder="Find Your Favorite Movies Here......"
            />
        </form>
    );
}

export default SearchBar;
