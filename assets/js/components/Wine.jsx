import React from 'react';
import { connect } from 'react-redux';

import { startEdit, updateWine,  fetchWines, addWine, deleteWine } from "../actions/wineActions";
import { showModal } from "../actions/modalActions.jsx";

@connect((store) => {
  return {
    wines: store.wines.wines,
    modal: store.modal.modal
  };
})

class Wine extends React.Component {
  deleteWine(id) {
    this.props.dispatch(deleteWine(id))
  }

  startEdit(editing, id) {
    this.props.dispatch(startEdit(editing, id))
  }

  showModal(editing, id) {
    this.props.dispatch(showModal(editing, id))
  }

  updateWine(id, e) {
    const name = e.currentTarget.value;
    this.props.dispatch(updateWine(id, name))
  }

  renderItemOrEditFields() {
    const { name, id, editing, index } = this.props;

    /* const tableStyle = {
     *     padding: "10px",
     *     width: "100%",
     *     border: "thin solid blue",
     *     marginTop: "5px",
     * }; 
     */
    const inputStyle = {
      width: "300px",
    }
    const buttonClass = "mdl-button mdl-js-button mdl-button--raised mdl-button--colored"

    if (editing) {
      return (
        <tr>
          <td>{index + 1}: </td>
          <td><input type="text" value={name} onChange={this.updateWine.bind(this, id)} /></td>
          <td><button onClick={this.deleteWine.bind(this, id)} className={buttonClass} >Delete</button></td>
          <td><button onClick={this.startEdit.bind(this, editing, id)} className={buttonClass} >Save</button></td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{index + 1}: </td>
          <td>{name}</td>
          <td><button onClick={this.deleteWine.bind(this, id)} className={buttonClass} >Delete</button></td>
          <td><button onClick={this.startEdit.bind(this, editing, id )} className={buttonClass} >Edit</button></td>
        </tr> 
      );
    }

  }

  render() {
    const { name, id, editing, index, vintage, producer, color, country, region, qty, price } = this.props;
    const inputStyle = {
      width: "300px",
    }
      

      /* TODO: figure out how to toggle edits
       * if(editing){
       *     var foo = <p>editing</p>
       * } else {
       *     var foo = <p>not editing</p>
       * }
       */
    return (
        <tr>
          <td>{index + 1}: </td>
          <td>{name}</td>
          <td>{vintage}</td>
          <td>{producer}</td>
          <td>{color}</td>
          <td>{country}</td>
          <td>{region}</td>
          <td>{qty}</td>
          <td>{price}</td>
          {/* <td>{foo}</td> */}
          {/* <td onClick={this.startEdit.bind(this, editing, id)}><i  className="material-icons">create</i></td> */}
          <td onClick={this.showModal.bind(this, editing, id)}><i  className="edit-wine material-icons">create</i></td>
        </tr> 
    ) 

  }
}

export default Wine;
