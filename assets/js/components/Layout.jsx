import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";

import Header from "../components/Header"; 
import Footer from "../components/Footer"; 


@connect((store) => {
  return {
    user: store.user
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  render() {
    const title = "Welcome ";
    const { user }  = this.props

    return (
      <div>
        <Header title={title} />
        <h1>Hello, {user.name}!</h1>;
        <Footer />
      </div>
    )
  }
}
