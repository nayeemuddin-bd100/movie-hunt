/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import './TestCard.css';

function TestCard({ movieName, imgId }) {
    return (
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w1280/${imgId}`} />
            <div className="info">
                <p>{movieName}</p>

                <button type="button">
                    {' '}
                    <Link style={{ textDecoration: 'none' }} to="/movidetails/12">
                        More
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default TestCard;
