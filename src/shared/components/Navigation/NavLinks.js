import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css'


const NavLinks = (props) => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>ABOUT ME</NavLink>
        </li>
        <li>
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
        </li>
        <li>
            <NavLink to="/contact">CONTACT ME</NavLink>
        </li>

    </ul>

}


export default NavLinks;