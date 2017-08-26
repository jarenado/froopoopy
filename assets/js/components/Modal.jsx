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

  saveEdit(id, e){
    /* console.log('save edit', id)*/
    /* console.log('event', e.target)*/
  }

  render() {
    const { modal } = this.props
    /* TODO: add logic to show modal with appropriate wine edit form*/
    /* if (modal.wine) {*/
    /* const mappedwine = Object.keys(modal.wine).map((key, value) => {*/
    /* return <li key={key}>{modal.wine[key].name}</li>*/
    /* }) */
    /* */
    /* }*/
    return (
      <div>
      { modal.isShowing &&
        <div>
          <div className="modal" >
            <div className="modal-wrapper">
              <div>
                <label>Name: </label><input  type="text" name="wine" /><br />
                <label>Vintage: </label><input type="text" name="wine" /><br />
                <label>QTY: </label><input type="text" name="wine" /><br />
              </div>
                <button onClick={this.hideModal.bind(this)}>Close</button>
                <input type="submit" onClick={this.saveEdit.bind(this, modal.wine)} value="save" />
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
