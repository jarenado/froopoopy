import React from 'react';
import { connect } from 'react-redux';

import { startEdit, updateWine,  fetchWines, addWine, deleteWine } from "../actions/wineActions";

@connect((store) => {
  return {
    wines: store.wines.wines
  };
})

class Wine extends React.Component {
  deleteWine(id) {
    this.props.dispatch(deleteWine(id))
  }

  startEdit(editing, id) {
      /* this.props.dispatch(startEdit(editing, id))*/
    const dialog = document.querySelector('dialog');

    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }

    dialog.showModal();
  }

  updateWine(id, e) {
    const name = e.currentTarget.value;
    this.props.dispatch(updateWine(id, name))
  }

  renderItemOrEditFields() {
    const { name, id, editing, index } = this.props;
    const inputStyle = {
      width: "300px",
    }

    const buttonClass = "mdl-button mdl-js-button mdl-button--raised mdl-button--colored"

    if (editing) {
      return (
        <tr>
          <td><input type="text" value={name} onChange={this.updateWine.bind(this, id)} /></td>
          <td><button id="show-dialog" onClick={this.startEdit.bind(this, editing, id)} className={buttonClass} >Save</button></td>
        </tr>
      );
    } else {
      return (
        <tr>
            <td>{name}</td>
            <td><button onClick={this.startEdit.bind(this, editing, id )} className={buttonClass} >Edit</button></td>
        </tr> 
        );
    }

  }

  render() {

    return this.renderItemOrEditFields()
    

  }
}

export default Wine;
