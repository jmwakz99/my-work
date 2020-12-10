import React from 'react';


import './CustomButton.css'

const CustomButton = props => {
    return <button className={props.className} style={props.style}>
        {props.children}
    </button>

}

export default CustomButton;