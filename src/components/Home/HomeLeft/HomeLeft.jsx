import React from 'react';
import PlayingList from './PlayingList';

function HomeLeft() {
    return (
        <div className="home__left col-12 col-sm-3 d-none d-md-block">
            <img
                className="home__left--banner img-fluid p-2 "
                src={`${process.env.PUBLIC_URL}/assests/images/movie-time-poster.jpg`}
                alt="banner"
            />
            <div className="home__left--title">
                <h2 className="px-3">Opening This Week</h2>
            </div>
            <div className="movieBox text-white">
                <div className="pb-1">
                    <div className="movieBox__head px-3">
                        <h2>Now Playing</h2>
                        <p>-</p>
                    </div>
                    {/* Playing Movie List */}
                    <PlayingList />
                    <PlayingList />
                    <PlayingList />
                    <PlayingList />

                    <h3 className="movieBox__btn"> Show More </h3>
                </div>
            </div>
        </div>
    );
}

export default HomeLeft;
