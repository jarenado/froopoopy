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
    this.props.dispatch(startEdit(editing, id))
  }

  updateWine(id, e) {
    const name = e.currentTarget.value;
    this.props.dispatch(updateWine(id, name))
  }

  renderItemOrEditFields() {
    const { name, id, editing } = this.props;
    const listStyle = {
        padding: "10px",
        border: "thin solid blue",
        marginTop: "5px",
    }; 

    if (editing) {
      return (
        <div>
          <span>{id}: </span>
          <span><input type="text" value={name} onChange={this.updateWine.bind(this, id)} /></span>
          <span><button onClick={this.deleteWine.bind(this, id)} className="btn btn-normal" >Delete</button></span>
          <span><button onClick={this.startEdit.bind(this, editing, id)} className="btn btn-normal" >Save</button></span>
        </div>
      );
    } else {
      return (
        <li style={listStyle}>
            <span>{id}: </span>
            <span>{name}</span>
            <span><button onClick={this.deleteWine.bind(this, id)} className="btn btn-normal" >Delete</button></span>
            <span><button onClick={this.startEdit.bind(this, editing, id )} className="btn btn-normal" >Edit</button></span>
        </li> 
        );
    }

  }

  render() {

    return this.renderItemOrEditFields()
    

  }
}

export default Wine;
