import React from 'react';

import Title from "./Header/Title";

class Header extends React.Component {
  render() {

    return (
	<Title title={this.props.title} />
    );
  }
}

export default Header;
