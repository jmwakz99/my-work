import React from 'react';


import CustomButton from '../CustomButtons/CustomButton';
import './Highlight.css'



const Highlight = props => {
    return <article className="highlight">

        <img src="/me.jpg" className="me" alt="" />
        <h1 className="name">I'm Johnson</h1>
        <p className="title">Web Developer</p>
        <CustomButton className="btn">
            Hire Me

        </CustomButton>




    </article>

}

export default Highlight;