import React from 'react';

import CardItem from './CardItem';
import './Project.css'


const Project = props => {
    return <section id="portfolio">
        <h1 className="porfolio-title">Portfolio
        <span className="bottom-line-portfolio"></span>
        </h1>
        <section className="portfolio-holder">
            <CardItem />
            <CardItem />
            <CardItem />

        </section>

    </section>

}

export default Project;