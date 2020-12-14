import React from 'react';




import './Modal.css'

const Modal = props => {

    return <div className="modal fade" id="projectsModal">
        <div className="modal-dialog ">
            <div className="modal-content">
                <div className="modal-header w-100">
                    <h5 className="modal-title text-dark mx-auto pl-5">{props.project.title && props.project.title.toUpperCase()}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p className="text-muted">{props.project && props.project.description}</p>
                </div>
                <div className="modal-footer">
                    <div className="row">
                        <div className="col-6">
                            {props.project.preview && <a href={props.project.preview} className="text-warning" style={{ cursor: "pointer" }} target="_blank" rel="noreferrer">Preview</a>}



                        </div>
                        <div className="col-6">
                            {
                                props.project.code && <a href={props.project.code} className="text-warning" style={{ cursor: "pointer" }} target="_blank" rel="noreferrer">Github</a>
                            }


                        </div>

                    </div>


                </div>
            </div>
        </div>
    </div>
}
export default Modal;