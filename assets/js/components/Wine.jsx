import React from 'react';

class Wine extends React.Component {
  render() {
    const listStyle = {
      padding: "20px",
      listStyle: "none",
      border: "thin solid blue",
      marginBottom: "10px"
       
    }

    return (
      <li className="col-md-4" style={listStyle}>
	<span>{this.props.id}: </span>
	<span>{this.props.qty}: </span>
	{this.props.label}
      </li> 
    );

  }
}

export default Wine;
