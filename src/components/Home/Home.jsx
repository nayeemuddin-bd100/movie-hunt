import React from 'react';
import Nav from '../Navigation/Nav';
import HomeLeft from './HomeLeft/HomeLeft';
import Carousel from './HomeRight/Carousel';
import MovieMenu from './HomeRight/MovieMenu';
import SearchBar from './HomeRight/SearchBar';
import TestCard from './HomeRight/TestCard';
// import bannerImg from '/assests/images/movie-time-poster.jpg';

function Home() {
    return (
        <div className="main-container">
            <div className="main-section">
                <Nav />
                <div className="home">
                    {/* Home Left */}
                    <HomeLeft />
                    <div className="home__right col-12 col-sm-9 px-4 py-5">
                        <SearchBar />
                        <Carousel />

                        <div className="movie-menu row">
                            <MovieMenu />
                            <MovieMenu />
                        </div>
                        <div className="explore text-center mt-2 py-5">
                            {/* <div className="row">
                                <div className="col-md-3">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assests/images/upcoming.jpg`}
                                        className="card-img-top "
                                        alt="..."
                                    />
                                </div>
                                <div className="col-md-3">
                                    {' '}
                                    <div className="col-md-3">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assests/images/upcoming.jpg`}
                                            className="card-img-top "
                                            alt="..."
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    {' '}
                                    <div className="col-md-3">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assests/images/upcoming.jpg`}
                                            className="card-img-top "
                                            alt="..."
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    {' '}
                                    <div className="col-md-3">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assests/images/upcoming.jpg`}
                                            className="card-img-top "
                                            alt="..."
                                        />
                                    </div>
                                </div>
                            </div> */}
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
                </div>
            </div>
        </div>
    );
}

export default Home;
