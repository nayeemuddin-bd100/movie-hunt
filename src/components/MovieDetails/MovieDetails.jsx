import React from 'react';
import Nav from '../Navigation/Nav';
import DetailsCard from './DetailsCard';

function MovieDetails() {
    return (
        <div className="main-container">
            <div className="main-section">
                <Nav />
                {/* <div className=" home__right col-12 px-4 py-5"> */}
                {/* <SearchBar /> */}

                {/* <div className="explore text-center mt-2 py-5"> */}
                <DetailsCard />
                {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    );
}

export default MovieDetails;
