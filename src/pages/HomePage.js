import React from 'react';

import Jumbotron from '../shared/components/UIElements/Jumbotron'
import Highlight from '../shared/components/UIElements/Highlight'
import About from '../shared/components/About/About'
import Projects from '../shared/components/Projects/Projects'
import Contact from '../shared/components/Contact/Contact'
import './HomePage.css'


const HomePage = props => {
    return <section >
        <Jumbotron>
            <Highlight />
        </Jumbotron>
        <About />
        <Projects />
        <Contact />


    </section>
}


export default HomePage;