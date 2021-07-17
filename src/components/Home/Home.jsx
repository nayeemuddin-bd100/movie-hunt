import React from 'react';
import Nav from '../Navigation/Nav';
import HomeLeft from './HomeLeft/HomeLeft';
import HomeRight from './HomeRight/HomeRight';

function Home() {
    return (
        <div className="main-container">
            <div className="main-section">
                <Nav />
                <div className="home">
                    {/* Home Left */}
                    <HomeLeft />
                    {/* Home right */}
                    <HomeRight />
                </div>
            </div>
        </div>
    );
}

export default Home;
