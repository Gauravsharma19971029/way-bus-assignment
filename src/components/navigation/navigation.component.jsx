import React from "react";
import "./navigation.component.css"
import { Link } from 'react-router-dom';


function Nav() {
    // eslint-disable-next-line jsx-a11y/heading-has-content
    return (

        <nav>
            <h3>WayBus</h3>
            <ul className="nav-links ">
                <Link className="link-style" to="/">
                    <li>Home</li>
                </Link>
                <Link className="link-style" to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>


    );
};

export default Nav;
