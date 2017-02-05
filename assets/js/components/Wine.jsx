import React from 'react';

class Wine extends React.Component {
  render() {
    const listStyle = {
      padding: "10px",
      border: "thin solid blue",
      marginTop: "5px",
    }; 
    return (
      <li style={listStyle}> {this.props.label}</li> 
    );

  }
}

export default Wine;
