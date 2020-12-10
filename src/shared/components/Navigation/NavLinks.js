import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';



import './NavLinks.css'


const NavLinks = (props) => {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -90;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }
    return <ul className="nav-links">

        <li>
            <Link scroll={el => scrollWithOffset(el)} to="#" >HOME</Link>
        </li>
        <li>
            <Link scroll={el => scrollWithOffset(el)} to="#about" >ABOUT ME</Link>
        </li>
        <li>
            <Link scroll={el => scrollWithOffset(el)} to="#portfolio">PORTFOLIO</Link>
        </li>
        <li>
            <Link scroll={el => scrollWithOffset(el)} to="#contact">CONTACT ME</Link>
        </li>

    </ul>

}


export default NavLinks;