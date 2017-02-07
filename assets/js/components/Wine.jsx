import React from 'react';

class Wine extends React.Component {
  render() {
    const { label, id } = this.props;
    const listStyle = {
      padding: "10px",
      border: "thin solid blue",
      marginTop: "5px",
    }; 
    return (
      <li style={listStyle}>
        <span>{id}: </span>
        <span>{label}</span>
	<span><button onClick={this.props.onClick} className="btn btn-normal" >Delete</button></span>
      </li> 
    );

  }
}

export default Wine;
