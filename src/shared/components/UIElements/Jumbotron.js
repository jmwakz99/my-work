import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';


import './Jumbotron.css'

const Jumbotron = props => {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -90;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }
    return <div className="jumbotron">
        <div className="w-75 mx-auto text-center d-none d-md-block pt-3">
            <img src="/me.jpg" className="rounded-circle profile-image" width="130" height="130" alt="" />
            <div className="">
                <h1 className="text-center display-4 pt-3">I'm Johnson</h1>
                <p className="lead web-developer pt-1 pb-1">Web Developer</p>

            </div>

            <div className="w-50 mx-auto">
                <Link scroll={el => scrollWithOffset(el)} to="#contact" className="btn btn-hire__me" style={{ width: "15rem" }}>Hire Me</Link>


            </div>


        </div>
        <div className="w-100 mx-auto text-center d-block d-md-none pt-5 mt-5 pb-0">
            <img src="/me.jpg" className="rounded-circle profile-image" width="90" height="90" alt="" />
            <div className="">
                <h2 className="text-center pt-3">I'm Johnson</h2>
                <p className="lead web-developer pt-1 pb-1">Web Developer</p>

            </div>

            <div className="w-75 mx-auto">
                <Link scroll={el => scrollWithOffset(el)} to="#contact" className="btn btn-hire__me p-1">Hire Me</Link>


            </div>


        </div>

    </div>

}

export default Jumbotron;