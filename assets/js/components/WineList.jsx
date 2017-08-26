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
    wines: store.wines.wines,
    modal: store.modal
  };
})

class WineList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchWines())
  }



  render () {
    const {wines, user} = this.props
    const tableClass = "mdl-data-table mdl-js-data-table mdl-shadow--2dp"

    const mappedWines = Object.keys(wines).map((item, i) => (
      <Wine
          id={item}
          key={i}
          vintage={wines[item].vintage}
          producer={wines[item].producer}
          color={wines[item].color}
          country={wines[item].country}
          region={wines[item].region}
          qty={wines[item].qty}
          price={wines[item].price}
          index={i}
          name={wines[item].name}
          editing={wines[item].editing}
      />
    )) 

    return (
      <table className={tableClass}>
        <thead>
          <tr>
            <th></th>
            <th>Label</th>
            <th>Vintage</th>
            <th>Producer</th>
            <th>Color</th>
            <th>Country</th>
            <th>Region</th>
            <th>QTY</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {mappedWines}
        </tbody>
      </table>
    );
  }
    
}

export default WineList;
