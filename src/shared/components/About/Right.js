import React from 'react';

import CustomButton from '../CustomButtons/CustomButton'
import './Right.css'

const Right = props => {
    return <aside className="about-me-description">
        <p>I'm Johnson Mwakazi, you can call me johnnie since most of my friends call me that. I'm a self-taught web developer and I have almost five years work in Software Development. What I find addictive about software development is the unique mix of logic and creativity. Everyday you get to solve new problems, or at least the same ones in hopefully better ways. I am really passionate and hard-working.</p>
        <p>Apart from programming I also play football where I was nicknamed Gaucho, since we both have goofy teeth.</p>
        <h5 className="skills-title">Skills:</h5>
        <span className="skills">HTML5, CSS3,BOOTSTRAP,  JAVASCRIPT, REACT JS, VUE JS, VUETIFY, NODE JS, EXPRESS JS, MONGO DB, MANGOOSE, FIREBASE, GIT, AJIRA</span>
        <section className="custom-buttons">
            <CustomButton className="btn">View Works</CustomButton>
            <CustomButton className="btn-outline">Download CV</CustomButton>
        </section>

    </aside>

}

export default Right;