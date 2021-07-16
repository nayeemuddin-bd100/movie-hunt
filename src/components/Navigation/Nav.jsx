import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Nav() {
    const history = useHistory();
    const { pathname } = history.location;
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
                    <Link className="router-link" to="/explore">
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
