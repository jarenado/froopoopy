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

  showModal(id) {
    this.props.dispatch(showModal(id))
  }

  updateWine(id, e) {
    const name = e.currentTarget.value;
    this.props.dispatch(updateWine(id, name))
  }

  render() {
    const { name, id, editing, index, vintage, producer, color, country, region, qty, price } = this.props;
      
    return (
        <tr>
          <td>{index + 1}:</td>
          <td>{name}</td>
          <td>{vintage}</td>
          <td>{producer}</td>
          <td>{color}</td>
          <td>{country}</td>
          <td>{region}</td>
          <td>{qty}</td>
          <td>{price}</td>
          <td onClick={this.showModal.bind(this, id)}>
              <i  className="edit-wine material-icons">create</i>
          </td>
        </tr> 
    ) 

  }
}

export default Wine;
