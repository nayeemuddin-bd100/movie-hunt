import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchValue) {
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
