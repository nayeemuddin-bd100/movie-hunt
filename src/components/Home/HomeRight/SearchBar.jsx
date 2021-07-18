import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
                    await axios
                        .get(
                            `https://api.themoviedb.org/3/search/movie?api_key=61a8b343fdd9fab973082cb4288fb534&language=en-US&query=${searchValue}`
                        )
                        .then((response) => {
                            console.log(response.results);
                            if (searchValue) {
                                handleSearch(response.data.results);
                            }
                        });
                } catch (error) {
                    // console.log(error.message);
                    // handleError(error.message);
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
