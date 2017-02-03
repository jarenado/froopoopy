import React from 'react';

class Wine extends React.Component {
  render() {
    console.log(this.props);
    return (
      <li> {this.props.label}</li> 
    );

  }
}

export default Wine;
