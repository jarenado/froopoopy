import React from 'react';
import { connect } from 'react-redux';

import { toggleEdit, fetchWines, addWine, deleteWine } from "../actions/wineActions";

@connect((store) => {
  return {
    wines: store.wines.wines
  };
})

class Wine extends React.Component {
  deleteWine(id) {
    this.props.dispatch(deleteWine(id))
  }

  handleEdit(editing, id) {
    this.props.dispatch(toggleEdit(editing, id))
  }

  renderItemOrEditFields(wine) {
    const { label, id, editing } = this.props;
    const listStyle = {
        padding: "10px",
        border: "thin solid blue",
        marginTop: "5px",
    }; 

    if (editing) {
      return (
        <div>
          <span>{id}: </span>
          <span><input type="text" name={label}/></span>
          <span><button onClick={this.deleteWine.bind(this, id)} className="btn btn-normal" >Delete</button></span>
          <span><button onClick={this.handleEdit.bind(this, editing, id )} className="btn btn-normal" >Edit</button></span>
        </div>
      );
    } else {
      return (
        <li style={listStyle}>
            <span>{id}: </span>
            <span>{label}</span>
            <span><button onClick={this.deleteWine.bind(this, id)} className="btn btn-normal" >Delete</button></span>
            <span><button onClick={this.handleEdit.bind(this, editing, id )} className="btn btn-normal" >Edit</button></span>
        </li> 
        );
    }

  }

  render() {

    return this.renderItemOrEditFields("jsoe")
    

  }
}

export default Wine;
