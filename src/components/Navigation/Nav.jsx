import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

function Nav() {
    const history = useHistory();
    const { pathname } = history.location;
    const { clearData } = useContext(GlobalContext);

    return (
        <nav className="navigation ">
            <div className="navigation__logo ">
                {' '}
                <Link className="router-link" to="/">
                    Movie Hunt
                </Link>{' '}
            </div>
            <div className="navigation__menu ">
                {pathname === '/' ? (
                    <Link onClick={() => clearData()} className="router-link" to="/explore">
                        <h2 className="navigation__menu--btn">Explore</h2>
                    </Link>
                ) : (
                    <Link className="router-link" to="/">
                        <h2 className="navigation__menu--btn">Home</h2>
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Nav;
