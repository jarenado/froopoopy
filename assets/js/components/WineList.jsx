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
    const mappedWines = wines.map((wine,index) => <Wine key={index} index={index} id={wine.id} name={wine.name} editing={wine.editing} />)

    return (
      <table className={tableClass}>
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
