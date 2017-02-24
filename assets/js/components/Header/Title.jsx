import React from 'react';

class Title extends React.Component {
  render() {
    const headerClass = "mdl-layout-title"
    return (
      <header className={headerClass}>
	ListoVino
      </header>
    );
  }
}
export default Title;