import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

import './NavLinks.css'


const NavLinks = (props) => {
    return <ul className="nav-links">
        <li>
            <Link smooth to="/#about" >ABOUT ME</Link>
        </li>
        <li>
            <Link smooth to="/#portfolio">PORTFOLIO</Link>
        </li>
        <li>
            <Link smooth to="/#contact">CONTACT ME</Link>
        </li>

    </ul>

}


export default NavLinks;