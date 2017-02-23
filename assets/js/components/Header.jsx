import React from 'react';

import Title from "./Header/Title";

class Header extends React.Component {

  render() {
    return (
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">
              
              <Title title={this.props.title} />
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

export default Header;
