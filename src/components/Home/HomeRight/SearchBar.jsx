import React from 'react';

function SearchBar() {
    return (
        <form>
            <input
                type="text"
                className="search-bar form-control"
                placeholder="Find Your Favorite Movies Here......"
            />
        </form>
    );
}

export default SearchBar;
