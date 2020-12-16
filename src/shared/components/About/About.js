import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';


import './About.css'

const About = props => {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -90;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }
    return <section id="about">
        <div className="container  pt-5  d-none d-md-block">
            <div className="row pt-4 ml-5 pl-5">
                <div className="col-sm-12 col-md-4 pt-5 mt-5">
                    <h1 className="pt-4 text-white">
                        About Me
                        <span className="bottom-line  text-warning" style={{ width: "5rem" }}></span>

                    </h1>

                </div>
                <div className="col-sm-12 col-md-8 pt-4">
                    <div className="about-me-description text-white">
                        <p className="">I'm Johnson Mwakazi, you can call me johnnie since most of my friends call me that. I'm a self-taught web developer highly motivated, self-starting developer. What I find addictive about software development is the unique mix of logic and creativity. Everyday you get to solve new problems, or at least the same ones in hopefully better ways.</p>
                        <p>Apart from programming I also play and watch football, my favorite club is Manchester united.</p>
                        <h5 className="skills-title">Skills:</h5>
                        <span className="skills text-warning">HTML5, CSS3,BOOTSTRAP,  JAVASCRIPT, REACT JS, VUE JS, VUETIFY, NODE JS, EXPRESS JS, MONGODB, MANGOOSE, FIREBASE, GIT, AJIRA</span>
                        <div className="row mt-3">
                            <div className="col-5 mr-0">
                                <Link scroll={el => scrollWithOffset(el)} to="#portfolio" className="btn ">View Works</Link>

                            </div>
                            <div className="col-5" style={{ marginLeft: "-5rem" }}>
                                <a href="/resume.docx" download className="btn ml-0 bg-transparent text-warning" style={{ border: "1px solid yellow" }}>Download CV</a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        <div className="container pt-4 d-block d-md-none">
            <div className="row pt-4">
                <div className="col-sm-12 col-md-4">
                    <h3 className="text-center text-white pt-4">
                        About Me
                        <span className="bottom-line mx-auto" style={{ width: "5rem" }}></span>

                    </h3>

                </div>
                <div className="col-sm-12 col-md-8 pt-4">
                    <div className="text-white">
                        <p className="">I'm Johnson Mwakazi, you can call me johnnie since most of my friends call me that. I'm a self-taught web developer highly motivated, self-starting developer. What I find addictive about software development is the unique mix of logic and creativity. Everyday you get to solve new problems, or at least the same ones in hopefully better ways.</p>
                        <p>Apart from programming I also play football where I was nicknamed Gaucho, since we both have goofy teeth.</p>
                        <h6 className="skills-title" style={{ fontSize: "1rem" }}>Skills:</h6>
                        <span className="skills" style={{ color: 'yellow', fontSize: "0.8rem" }}>HTML5, CSS3,BOOTSTRAP,  JAVASCRIPT, REACT JS, VUE JS, VUETIFY, NODE JS, EXPRESS JS, MONGODB, MANGOOSE, FIREBASE, GIT, AJIRA</span>
                        <div className="w-75 mt-1">
                            <Link scroll={el => scrollWithOffset(el)} to="#portfolio" className="btn p-2" style={{ fontSize: "0.8rem" }}>View Works</Link>
                            <a href="/resume.docx" download className="btn  bg-transparent text-warning p-2" style={{ border: "1px solid yellow", fontSize: "0.8rem" }}>Download CV</a>


                        </div>


                    </div>

                </div>

            </div>

        </div>





    </section>

}

export default About;