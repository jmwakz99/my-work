import React from 'react';


import './CustomButton.css'

const CustomButton = props => {
    return <button className={props.className}  >
        {props.children}
    </button>

}

export default CustomButton;