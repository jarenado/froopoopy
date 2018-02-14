import React from 'react';
import PropTypes from 'prop-types';

import Title from "./Header/Title";

export default class Header extends React.Component {

  render() {
    const { title } = this.props;
    return (
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">
              
              <Title title={title} />
            </span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a className="mdl-navigation__link">Link</a>
              <a className="mdl-navigation__link">Link</a>
              <a className="mdl-navigation__link">Link</a>
              <a className="mdl-navigation__link">Link</a>
            </nav>
          </div>
        </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
}
