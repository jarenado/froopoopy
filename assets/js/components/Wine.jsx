import React from 'react';

class Wine extends React.Component {
  renderItemOrEditFields(wine) {
    console.log('im lost', this.props);
    const { label, id, editing } = this.props;
    const listStyle = {
        padding: "10px",
        border: "thin solid blue",
        marginTop: "5px",
    }; 

    if (editing) {
      return <div>editing</div>;
    } else {
      return (
        <li style={listStyle}>
            <span>{id}: </span>
            <span>{label}</span>
            <span><button onClick={this.props.onClick} className="btn btn-normal" >Delete</button></span>
        </li> 
        );
    }

  }

  render() {

    return this.renderItemOrEditFields("jsoe")
    

  }
}

export default Wine;
