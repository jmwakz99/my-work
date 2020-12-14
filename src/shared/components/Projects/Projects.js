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
                { id: 'u1', src: "/u-tally.png", title: 'u-tally', preview: 'https://u-tally.com', code: 'https://github.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio lacus, vehicula vel justo maximus, convallis euismod tellus. Mauris elementum dui sit amet ligula malesuada, sed commodo felis vestibulum. Cras ut feugiat ligula. Nullam rutrum arcu ut tempus auctor. Aliquam at ultricies augue. Vivamus ultricies leo ac semper porttitor. Cras commodo semper nisl, sed congue nunc luctus eu. Nam condimentum diam ac ligula tristique varius. In sit amet sapien pellentesque urna ultricies porttitor non non metus. Ut tincidunt nisi pellentesque velit tempor, sit amet aliquam felis tincidunt. Integer feugiat dolor enim, nec tincidunt justo lobortis at.' },
                { id: 'u2', src: "/mjengosmart.png", title: 'mjengosmart', preview: 'https://mjengosmart.com', description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio lacus, vehicula vel justo maximus, convallis euismod tellus. Mauris elementum dui sit amet ligula malesuada, sed commodo felis vestibulum. Cras ut feugiat ligula. Nullam rutrum arcu ut tempus auctor. Aliquam at ultricies augue. Vivamus ultricies leo ac semper porttitor. Cras commodo semper nisl, sed congue nunc luctus eu. Nam condimentum diam ac ligula tristique varius. In sit amet sapien pellentesque urna ultricies porttitor non non metus. Ut tincidunt nisi pellentesque velit tempor, sit amet aliquam felis tincidunt. Integer feugiat dolor enim, nec tincidunt justo lobortis at.' },
                { id: 'u3', title: 'portfolio', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio lacus, vehicula vel justo maximus, convallis euismod tellus. Mauris elementum dui sit amet ligula malesuada, sed commodo felis vestibulum. Cras ut feugiat ligula. Nullam rutrum arcu ut tempus auctor. Aliquam at ultricies augue. Vivamus ultricies leo ac semper porttitor. Cras commodo semper nisl, sed congue nunc luctus eu. Nam condimentum diam ac ligula tristique varius. In sit amet sapien pellentesque urna ultricies porttitor non non metus. Ut tincidunt nisi pellentesque velit tempor, sit amet aliquam felis tincidunt. Integer feugiat dolor enim, nec tincidunt justo lobortis at.' }
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