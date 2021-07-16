import React from 'react';
import Carousel from './Carousel';
import MovieMenu from './MovieMenu';
import SearchBar from './SearchBar';
import TestCard from './TestCard';

function HomeRight() {
    return (
        <div className="home__right col-12 col-md-9 px-4 py-5">
            <SearchBar />
            <Carousel />

            <div className="movie-menu row">
                <MovieMenu value="upcoming" />
                <MovieMenu value="toprated" />
            </div>
            <div className="explore text-center mt-2 py-5">
                <div className="wrapper cardItem">
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                    <TestCard />
                </div>
            </div>
        </div>
    );
}

export default HomeRight;
