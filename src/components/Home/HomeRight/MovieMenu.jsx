import React from 'react';

function MovieMenu() {
    return (
        <div className="movie-menu__upcoming col-md-6 mb-2 mb-md-0">
            <img
                className="img-fluid"
                src={`${process.env.PUBLIC_URL}/assests/images/upcoming.jpg`}
                alt="Upcoming"
            />
            <h3 className="movie-menu__upcoming--hover"> UpComing </h3>
        </div>
    );
}

export default MovieMenu;
