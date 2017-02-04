import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";

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
    return <h1>{this.props.user.name}</h1>;
  }
}
