import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h2>404 Error</h2>
            <h2>
                Go to <Link to="/">Home</Link> Page
            </h2>
        </div>
    );
}

export default NotFound;
