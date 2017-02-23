import React from "react";

//connect to store
import { connect } from "react-redux";

//actions
import { fetchUser } from "../actions/userActions";
import { addWine } from "../actions/wineActions";

//components
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import WineList from "../components/WineList"; 

import axios from "axios"
/* var winesjson = require("../wines.json")*/
import winesjson from "../wines.json"

require("../sass/style.scss");

@connect((store) => {
  return {
    user: store.user.user,
    wines: store.wines.wines
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
      console.log(winesjson)
  }

  addWine() {
    this.props.dispatch(addWine())
  }

  render() {
    const { user, wines } = this.props
    return (
	<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
	    <div className="mdl-layout__container">
		<Header title={user.name} />
		<p>Welcome, {user.name}. Here are you're wines:</p>
		<WineList wines={this.props.wines} />
		<button className="btn btn-danger" onClick={this.addWine.bind(this)}>Add Wine</button>
		<Footer />
	    </div>
	</div>
    )
  }
}
