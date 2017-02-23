import React from 'react';

class Title extends React.Component {
  render() {
    const headerClass = "mdl-layout__header is-casting-shadow"
    return (
      <header className={headerClass}>
	<h1>ListoVino</h1>
      </header>
    );
  }
}
export default Title;