import React from 'react';

import Jumbotron from '../shared/components/UIElements/Jumbotron'
import Highlight from '../shared/components/UIElements/Highlight'
import About from '../shared/components/About/About'
import './HomePage.css'


const HomePage = props => {
    return <section id="home">
        <Jumbotron>
            <Highlight />
        </Jumbotron>
        <About />


    </section>
}


export default HomePage;