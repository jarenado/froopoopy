import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";
import { fetchWines } from "../actions/wineActions";

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

  render() {
    const title = "Welcome ";
    const { user, wines } = this.props
    const mappedWines = wines.map((wine,index) => <Wine key={index} label={wine.name} />)
    const listStyle = {
      listStyle: "none",
      padding: "0",
    };


    return (
      <div className="container-fluid">
        <Header title={user.name} />
        <p>Here are you're wines:</p>
        <ul style={listStyle}>{mappedWines}</ul>
        <Footer />
      </div>
    )
  }
}
