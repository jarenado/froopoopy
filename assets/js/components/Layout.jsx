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

@connect((store) => {
  return {
    user: store.user.user,
    wines: store.wines.wines
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
    const { user, wines } = this.props

    return (
      <div className="container-fluid">
        <Header title={user.name} />
        <p>Here are you're wines:</p>
        <WineList wines={this.props.wines} />
        <button className="btn btn-danger" onClick={this.addWine.bind(this)}>Add Wine</button>
        <Footer />
      </div>
    )
  }
}
