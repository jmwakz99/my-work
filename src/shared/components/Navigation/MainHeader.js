import React from 'react';
import { withRouter } from 'react-router-dom'



import './MainHeader.css'

const MainHeader = (props) => {
    console.log(props)
    return <header className={`${props.location.hash === '#about' || props.location.hash === '#portfolio' || props.location.hash === '#contact' ? 'box-shadow-class' : null}  main-header`}>
        {props.children}
    </header>

}

export default withRouter(MainHeader);