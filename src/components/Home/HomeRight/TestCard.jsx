/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import './TestCard.css';

function TestCard() {
    return (
        <div className="card">
            <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
            <div className="info">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, ratione.</p>

                <button type="button">
                    {' '}
                    <Link style={{ textDecoration: 'none' }} to="/movidetails/12">
                        More
                    </Link>{' '}
                </button>
            </div>
        </div>
    );
}

export default TestCard;
