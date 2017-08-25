import React from 'react'
import { connect } from 'react-redux';

@connect((store) => {
  return {
    modal: store.modal.modal
  };
})

class Modal extends React.Component {
  render() {
    const { modal } = this.props
    /* TODO: add logic to show modal with appropriate wine edit form*/
    /* if (modal.type) {
     *   console.log('im on')
     * }else {
     *   console.log('im off')
     * }
     */
    return <div className="modal" >I'm a modal!</div>
  }
}

export default Modal;
