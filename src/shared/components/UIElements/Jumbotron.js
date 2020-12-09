import React from 'react';


import './Jumbotron.css'

const Jumbotron = props => {
    return <section className="jumbotron">
        {props.children}
    </section>
}

export default Jumbotron;