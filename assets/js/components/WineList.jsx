import React from 'react'

//connect to store
import { connect } from "react-redux";

//actions
import { fetchUser } from "../actions/userActions";
import { fetchWines, addWine, deleteWine } from "../actions/wineActions";

//components
import Wine from "../components/Wine"; 

@connect((store) => {
  return {
    user: store.user.user,
    wines: store.wines.wines
  };
})

class WineList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchWines())
  }

  deleteWine(id) {
    console.log(id);
    this.props.dispatch(deleteWine(id))
  }

  render () {
    const {wines, user} = this.props
    const listStyle = {
      listStyle: "none",
      padding: "0",
    };
    const mappedWines = wines.map((wine,index) => <Wine onClick={this.deleteWine.bind(this, wine.id)} key={index} id={wine.id} label={wine.name} editing={wine.editing} />)

    return (
      <ul style={listStyle}>{mappedWines}</ul>
    );
  }
    
}

export default WineList;
