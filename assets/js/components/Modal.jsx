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
    /* if (modal.type) {
     *   console.log('im on')
     * }else {
     *   console.log('im off')
     * }
     */
    return (
      <div>
        { modal.type &&
          <div className="modal" >
            <div><button onClick={this.hideModal.bind(this)}>Close</button></div>
            I'm a modal!
          </div>
        }
      </div>
    )
  }
}

export default Modal;
