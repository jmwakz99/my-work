import React from 'react';
import { connect } from 'react-redux';

import Modal from './Modal'
import './Card.css';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: ''
    }
  }

  openModalHandler = () => {


    this.props.setSelectedProject(this.props.project)


    window.$('#projectsModal').modal('hide');
    window.$('#projectsModal').modal('show');
  }


  render() {
    return (
      <React.Fragment>
        <Modal project={this.props && this.props.selectedProject}></Modal >
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={this.props.project.src && this.props.project.src} alt="Avatar" className="avatar" />
            </div>
            <div className="flip-card-back pt-5">
              <h6>View the project</h6>
              <p onClick={this.openModalHandler}><i className="fas fa-eye view-project-icon-lg" title="view project"></i></p>
            </div>
            <div className="view-project-icon-holder" onClick={this.openModalHandler}>

              <i className="fas fa-eye view-project-icon" title="view project"></i>

            </div>
          </div>
        </div>
      </React.Fragment>





    )


  }

};

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
export default connect(mapStateToProps, mapDispatchToProps)(Card);
