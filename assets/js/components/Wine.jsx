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

    const buttonStyle = {
      width: "80px",
    }

    if (editing) {
      return (
        <tr>
          <td>{index + 1}: </td>
          <td style={inputStyle}><input type="text" value={name} onChange={this.updateWine.bind(this, id)} /></td>
          <td><button onClick={this.deleteWine.bind(this, id)} className="btn btn-normal" >Delete</button></td>
          <td><button style={buttonStyle} onClick={this.startEdit.bind(this, editing, id)} className="btn btn-normal" >Save</button></td>
        </tr>
      );
    } else {
      return (
        <tr>
            <td>{index + 1}: </td>
            <td style={inputStyle}>{name}</td>
            <td><button onClick={this.deleteWine.bind(this, id)} className="btn btn-normal" >Delete</button></td>
            <td><button style={buttonStyle} onClick={this.startEdit.bind(this, editing, id )} className="btn btn-normal" >Edit</button></td>
        </tr> 
        );
    }

  }

  render() {

    return this.renderItemOrEditFields()
    

  }
}

export default Wine;
