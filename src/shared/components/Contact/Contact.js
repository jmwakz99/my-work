import React from 'react';
import * as emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Contact.css';

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
            serviceId: "service_qi7oivc",
            templateId: 'johnsonmwakazi',
            userId: "user_5UTCAdGYkpOno0c37mWup"

        }
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        let template_params = {
            to_email: 'mwanjilajohnson@gmail.com',
            message: this.state.message,
            email: this.state.email,
            name: this.state.name
        }
        emailjs.send(this.state.serviceId, this.state.templateId, template_params, this.state.userId).then((res) => {

            const inputs = document.querySelectorAll('input');
            const textarea = document.querySelectorAll('textarea');
            toast.dark('Your email was sent successifully!')
            inputs.forEach((input) => {
                input.value = ''
            })
            textarea.forEach((text) => {
                text.value = ''
            })

        }).catch((err) => {
            toast.error('Email could not be sent please try again!')
            console.log(err)

        })


    }
    handleChange = (e) => {
        let name = e.target.name

        this.setState({
            [name]: e.target.value,


        })


    }
    render() {
        return <React.Fragment>
            <ToastContainer hideProgressBar={true} />
            <section id="contact">

                <h1 className="contact-title mt-3">Contact Me
        <span className="bottom-line-portfolio"></span>
                </h1>

                <div className="container mt-5 pt-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 mb-2">
                            <h6 className="text-white">Contact info</h6>
                            <p style={{ color: '#727B86' }} className="pt-3 pb-5"><i className="fas fa-envelope"></i><span className="pl-3">mwanjilajohnson@gmail.com</span></p>
                            <h6 className="text-white pt-3">Follow Me</h6>
                            <div className="pb-3">
                                <a href="https://www.facebook.com/johnson.mwanjila.1" target="_blank" style={{ color: '#727B86' }} rel="noreferrer"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                                <a href="https://twitter.com/Jmwakz1" target="_blank" style={{ color: '#727B86' }} rel="noreferrer" className="pl-4"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                                <a href="https://www.linkedin.com/in/johnson-mwakazi-0a9a8b1a8/" target="_blank" style={{ color: '#727B86' }} rel="noreferrer" className="pl-4"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 pr-5">
                            <form className="" style={{ color: '#727B86' }} onSubmit={this.onSubmitHandler}>
                                <div className="form-group pt-1">
                                    <label htmlFor="name">NAME</label>
                                    <input type="text" name="name" onChange={this.handleChange} className="form-control" id="name" placeholder="Type your name" required style={{ background: 'transparent' }} />

                                </div>
                                <div className="form-group pt-1">
                                    <label htmlFor="email">EMAIL</label>
                                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email} className="form-control" id="email" aria-describedby="emailHelp" required placeholder="Type your email address" />
                                </div>
                                <div className="form-group pt-1">
                                    <label htmlFor="message">YOUR MESSAGE</label>
                                    <textarea name="message" onChange={this.handleChange} value={this.state.message} className="form-control" id="message" rows="5" placeholder="Type your message here" required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: "15rem" }}>Submit</button>
                            </form>
                        </div>

                    </div>

                </div>



            </section>

        </React.Fragment>



    }

}

export default Contact;