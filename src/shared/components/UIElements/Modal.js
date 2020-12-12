import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group'


import Backdrop from './Backdrop'
import './Modal.css'

const ModalOverlay = props => {
    const content = <div className={`modal ${props.className}`} style={props.style}>
        <header className={`modal__header ${props.headerClass}`}>
            <span className="close-modal" onClick={props.onCancel}>X</span>



        </header>
        <div className={`modal__content ${props.contentClass}`}>

            <h4 className="project-name">{props.title && props.title.toUpperCase()}</h4>
            {props.description}

        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
            {props.preview && <a href={props.preview} className="footer__button" target="_blank" rel="noreferrer">preview</a>}
            {props.code && <a href={props.code} className="footer__button" target="_blank" rel="noreferrer">source code</a>}






        </footer>
    </div>
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}



const Modal = props => {
    return <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancel} />}
        <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={300} classNames="modal">
            <ModalOverlay {...props} />
        </CSSTransition>

    </React.Fragment>

}

export default Modal;