import React, { useState } from 'react';

import Modal from './Modal'
import './Card.css';

const Card = props => {
  const [showModal, setShowModal] = useState(false)

  const openModalHandler = () => setShowModal(true)
  const closeModalHandler = () => setShowModal(false)


  return (
    <React.Fragment>
      <Modal show={showModal} onCancel={closeModalHandler} {...props} contentClass="place-item__modal-content" footerClass="modal__footer">

      </Modal>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/u-tally.png" alt="Avatar" className="avatar" />
          </div>
          <div className="flip-card-back">
            <h1>View the project</h1>
            <p onClick={openModalHandler}><i className="fas fa-eye view-project-icon-lg" title="view project"></i></p>
          </div>
          <div className="view-project-icon-holder" onClick={openModalHandler}>

            <i className="fas fa-eye view-project-icon" title="view project"></i>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
