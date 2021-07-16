import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Nav from '../Navigation/Nav';
import HomeLeft from './HomeLeft/HomeLeft';
import HomeRight from './HomeRight/HomeRight';

function Home() {
    const test = useContext(GlobalContext);
    console.log(test);

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
