import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";
import { fetchWines, addWine, deleteWine } from "../actions/wineActions";

import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Wine from "../components/Wine"; 


@connect((store) => {
  return {
    user: store.user.user,
    wines: store.wines.wines
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
    this.props.dispatch(fetchWines())
  }

  addWine() {
    this.props.dispatch(addWine())
  }
  
  deleteWine(id) {
    console.log(id);
    this.props.dispatch(deleteWine(id))
  }

  render() {
    const { user, wines } = this.props
    const mappedWines = wines.map((wine,index) => <Wine onClick={this.deleteWine.bind(this, wine.id)} key={index} id={wine.id} label={wine.name} />)
    const listStyle = {
      listStyle: "none",
      padding: "0",
    };


    return (
      <div className="container-fluid">
        <Header title={user.name} />
        <p>Here are you're wines:</p>
        <ul style={listStyle}>{mappedWines}</ul>
        <button className="btn btn-danger" onClick={this.addWine.bind(this)}>Add Wine</button>
        <Footer />
      </div>
    )
  }
}
