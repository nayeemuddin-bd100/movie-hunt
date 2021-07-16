import React from 'react';
import { Link } from 'react-router-dom';

function MovieMenu({ value }) {
    return (
        <div className="movie-menu__upcoming col-md-6 mb-2 mb-md-0">
            <img
                className="img-fluid"
                src={`${process.env.PUBLIC_URL}/assests/images/upcoming.jpg`}
                alt="Upcoming"
            />
            <h3 className="movie-menu__upcoming--hover">
                {value === 'upcoming' ? (
                    <Link className="router-link" to="/explore">
                        Up Coming
                    </Link>
                ) : (
                    <Link className="router-link" to="/explore">
                        Top Rated
                    </Link>
                )}
            </h3>
        </div>
    );
}

export default MovieMenu;
