import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";
import { fetchWines } from "../actions/wineActions";

import Header from "../components/Header"; 
import Footer from "../components/Footer"; 


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
    const mappedWines = wines.map(wine => <li>{wine.name}</li>)

    return (
      <div>
        <Header title={title} />
        <h1>Hello, {user.name}!</h1>;
        <p>Here are you're wines:</p>
        <ul>{mappedWines}</ul>
        <Footer />
      </div>
    )
  }
}
