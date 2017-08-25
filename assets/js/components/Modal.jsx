import React from 'react'
import { connect } from 'react-redux';
import { hideModal } from "../actions/modalActions.jsx";

@connect((store) => {
  return {
    modal: store.modal.modal
  };
})

class Modal extends React.Component {

  hideModal(){
    this.props.dispatch(hideModal())
  }

  render() {
    const { modal } = this.props
    /* TODO: add logic to show modal with appropriate wine edit form*/
    return (
      <div>
        { modal.type &&
          <div>
              <div className="modal" >
                <div className="modal-wrapper">
                <div><button onClick={this.hideModal.bind(this)}>Close</button></div>
                I'm a modal!
                </div>
              </div>
              <div className="overlay"></div>
          </div>
        }
      </div>
    )
  }
}

export default Modal;
