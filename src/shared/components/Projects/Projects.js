import React from 'react';
import { connect } from 'react-redux';

import Modal from '../UIElements/Modal'
import CardItem from './CardItem';
import './Project.css'


class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                { id: 'u1', src: "/u-tally.png", title: 'u-tally', preview: 'https://u-tally.com', code: 'https://github.com', description: 'Developed this site for my client, it is an ecommerce site where the target market is people who listen to spotify music and play video games(playstation). The languages involved; React Js, Redux and Bootstrap for the frontend and Firebase for the backend. I also integrated payment getaway(paypal and flutterwave) and transactional emails with sendgrid.Three weeks after the site went live it has generated a revenue of at least $270.' },
                { id: 'u2', src: "/mjengosmart.png", title: 'mjengosmart', preview: 'https://mjengosmart.com', description: 'Developed this site for my client, the purpose of the app is to bring structured processes, guidelines and management in the construction industry by creating a construction ecosystem that is transparent and efficient. My role was to build the frontend side of the app by collaboration with the backend developers. The technologies involved; Vue Js, Vuex, Materialize css for the frontend and python, Django and PostgreSQL for the backend.' },
                { id: 'u3', src: "/portfolio.png", title: 'portfolio', preview: 'https://mjengosmart.com', code: 'https://github.com', description: 'This is my portfolio site. Technologies involved; React Js, Redux and Bootstrap.' }
            ]
        }
    }
    openModalHandler = (project) => {
        this.props.setSelectedProject(project)

        window.$('#projectsModal').modal('hide');
        window.$('#projectsModal').modal('show');
    }
    render() {
        return <section id="portfolio">
            <Modal project={this.props && this.props.selectedProject}></Modal >
            <h1 className="porfolio-title ">Portfolio
        <span className="bottom-line-portfolio"></span>
            </h1>
            <section className="portfolio-holder">
                <section className="projects  mt-5">
                    <div className="container">
                        <div className="row d-none d-md-flex">
                            {this.state.projects ? this.state.projects.map((project) => (


                                <div className="col-sm-12 col-md-4" key={project.id}>
                                    <CardItem project={project} />

                                </div>


                            )) : null}



                        </div>
                        <div className="d-flex row d-md-none">
                            <div className="col-sm-12">
                                <ul className="list-group mx-auto">

                                    {this.state.projects ? this.state.projects.map((project) => (
                                        <li className="list-group-item bg-transparent p-5 d-flex justify-content-between align-items-center text-white" key={project.id}>

                                            {project.title}
                                            <span className="badge  badge-pill" onClick={() => this.openModalHandler(project)}><i className="fas fa-eye view-project-icon" title="view project"></i></span>
                                        </li>









                                    )) : null}

                                </ul>


                            </div>


                        </div>







                    </div>
                </section>




            </section>

        </section>

    }




}

const mapStateToProps = (state) => {
    return {
        selectedProject: state.selectedProject
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedProject: (selectedProject) => dispatch({ type: 'SET_SELECTED_PROJECT', payload: selectedProject })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);