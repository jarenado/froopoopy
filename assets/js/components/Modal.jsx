import React from 'react';

class Modal extends React.Component {

  closeModal(e) {
    console.log(e.currentTarget);
  }

  render() {
    let backdropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '9998',
      background: 'rgba(0, 0, 0, 0.3)'
    }

    return (
      <dialog id="mdl-dialog" className="mdl-dialog">
        <div className="">{this.props.children}</div>
        <p><button onClick={this.closeModal.bind(this)}>Close</button></p>
      </dialog>
    ) 
  }
}

export default Modal
