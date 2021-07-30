/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../../Api_Config';
import './TestCard.css';

function TestCard({ movieName, imgId, id }) {
    return (
        <div className="card">
            {imgId ? (
                <img src={`${IMAGE_URL}w1280/${imgId}`} />
            ) : (
                <img src={`${process.env.PUBLIC_URL}/assests/images/movie-time-poster.jpg`} />
            )}
            <div className="info">
                <p>{movieName}</p>

                <button type="button">
                    <Link to={`/movidetails/${id}`} className="router-link">
                        More
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default TestCard;
