import React from 'react';

function PlayingList() {
    return (
        <div className="movieBox__movielist px-3">
            <div className="movieBox__movielist__left">
                <img
                    className="movieBox__movielist--img me-2 "
                    src={`${process.env.PUBLIC_URL}/assests/images/movie-time-poster.jpg`}
                    alt="banner"
                />
                <div className="movieBox__movielist--title"> Movie Name</div>
            </div>
            <h2 className="movieBox__movielist--rating">7.8</h2>
        </div>
    );
}

export default PlayingList;
