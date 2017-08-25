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



  render () {
    const {wines, user} = this.props
    const tableClass = "mdl-data-table mdl-js-data-table mdl-shadow--2dp"

    const mappedWines = Object.keys(wines).map((item, i) => (
      <Wine
          id={i}
          key={i}
          vintage={wines[item].vintage}
          index={i}
          name={wines[item].name}
          editing={wines[item].editing}
      />
    )) 

    return (
      <table id="my-table" className={tableClass}>
        <thead>
          <tr>
            <th></th>
            <th>Label</th>
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
