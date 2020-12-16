import React from 'react';

import './Footer.css';


const Footer = props => {
    return <footer className="mb-0 pb-0">
        <div className="" style={{ paddingTop: "15rem" }}>
            <blockquote className="blockquote text-center">
                <p className="mb-0" style={{ color: "#727B86" }}>Simplicity is prerequisite for reliability.</p>
                <footer className="blockquote-footer">by <cite title="Source Title">Edsger Dijkstra</cite></footer>

            </blockquote>
            <div className="mx-auto text-center p-2">
                <a href="https://www.facebook.com/johnson.mwanjila.1" target="_blank" style={{ color: '#727B86' }} rel="noreferrer"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                <a href="https://twitter.com/Jmwakz1" target="_blank" style={{ color: '#727B86' }} rel="noreferrer" className="pl-4"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/johnson-mwakazi-0a9a8b1a8/" target="_blank" style={{ color: '#727B86' }} rel="noreferrer" className="pl-4"><i className="fab fa-linkedin" aria-hidden="true"></i></a>

            </div>
            <div className="w-100 pt-2">
                <small className="text-center text-muted d-block">Copyright &copy; {new Date().getFullYear()} Johnson Mwakazi</small>

            </div>





        </div>

    </footer>

}



export default Footer;