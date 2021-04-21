import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Topbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <Link className="navbar-brand" to='/home'>Order</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/home">{loggedInUser.name}</Link>
                </li>
                </ul>
            </div>
            </nav>
    );
};

export default Topbar;