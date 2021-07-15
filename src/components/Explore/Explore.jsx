import React from 'react';
import SearchBar from '../Home/HomeRight/SearchBar';
import TestCard from '../Home/HomeRight/TestCard';
import Nav from '../Navigation/Nav';
import './Explore.css';

function Explore() {
    return (
        <div className="main-container">
            <div className="main-section">
                <Nav />
                <div className=" home__right col-12 px-4 py-5">
                    <SearchBar />

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
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
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
            </div>
        </div>
    );
}

export default Explore;
