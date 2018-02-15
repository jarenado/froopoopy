import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';

import { startEdit, updateWine,  fetchWines, addWine, deleteWine } from "../actions/wineActions";
import { showModal } from "../actions/modalActions.jsx";

@connect((store) => {
  return {
    wines: store.wines.wines,
    modal: store.modal.modal
  };
})

export default class Wine extends React.Component {
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

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const { name, id, editing, index, vintage, producer, color, country, region, qty, price } = this.props;
    const inputStyle = {
      width: "300px",
    }
    const actions = [
        <Button
      label="Cancel"
      primary={true}
      onClick={this.handleClose}
        />,
      <Button
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
        />,
    ];
    return (

      <span>
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
            The actions in this window were passed in as an array of React objects.
          </Dialog>
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
          <td><i onClick={this.handleOpen}  className="edit-wine material-icons">create</i></td>
        </tr> 
      </span>
    ) 

  }
}

Wine.propTypes = {
  name: PropTypes.string,
  vintage: PropTypes.number,
  producer: PropTypes.string,
  color: PropTypes.string,
  country: PropTypes.string,
  region: PropTypes.string,
  qty: PropTypes.number,
  price: PropTypes.number
}
