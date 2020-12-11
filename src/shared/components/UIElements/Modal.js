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
            {props.children}
            <h4>U-TALLY</h4>
            lorem ipssum dolor sit amet, consectetur adipiscing el
            lorem ipssum dolor sit amet, consectetur adipiscing el
            lorem ipssum dolor sit amet, consectetur adipiscing el
            lorem ipssum dolor sit amet, consectetur adipiscing el
            lorem ipssum dolor sit amet, consectetur adipiscing el
            lorem ipssum dolor sit amet, consectetur adipiscing el


        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
            {props.children}

            <a href="https://u-tally.com" className="footer__button" target="_blank" rel="noreferrer">preview</a>
            <a href="https://github.com" className="footer__button" target="_blank" rel="noreferrer">code</a>


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