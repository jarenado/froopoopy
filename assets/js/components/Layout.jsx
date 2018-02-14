import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import axios from "axios";

//actions
import { fetchUser } from "../actions/userActions";
import { addWine } from "../actions/wineActions";
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Modal from "../components/Modal"; 
import WineList from "../components/WineList"; 


require("../sass/style.scss");

@connect((store) => {
  return {
    user: store.user.user,
    wines: store.wines.wines,
    modal: store.modal.modal
      
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  addWine() {
    this.props.dispatch(addWine())
  }

  render() {
    const { user, wines } = this.props;
    const buttonClass = "mdl-button mdl-js-button mdl-button--raised mdl-button--colored"

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header title={user.name} />
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Settings</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link"></a>
            <a className="mdl-navigation__link">Link</a>
            <a className="mdl-navigation__link">Link</a>
            <a className="mdl-navigation__link">Link</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <p>Welcome, {user.name}. Here are you're wines:</p>
          <WineList wines={wines} />
          <button className={buttonClass} onClick={this.addWine.bind(this)}>Add Wine</button>
          <Modal />
        </main>
		    <Footer />
	    </div>
    )
  }
}

Layout.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.number.isRequired
  })
}
