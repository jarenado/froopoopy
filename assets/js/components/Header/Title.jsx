import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <h1>Welcome, {this.props.title}!</h1>
    );
  }
}
export default Title;