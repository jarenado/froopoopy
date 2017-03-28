import React from 'react'

//connect to store
import { connect } from "react-redux";

//actions
import { fetchUser } from "../actions/userActions";
import { fetchWines, addWine, deleteWine } from "../actions/wineActions";

//components
import Wine from "../components/Wine"; 
import Modal from "../components/Modal"; 

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
    const mappedWines = Object.entries(wines).map((wine,index) =>
      <Wine key={wine[0]}
            index={index}
            id={wine[0]}
            name={wine[1].name}
            editing={wine.editing} />)

    return (
      <div>
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
        <Modal>
          <h1>Edit Wine</h1>
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="text" id="sample1" />
                <label className="mdl-textfield__label" htmlFor="sample1">Name...</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="text" id="sample1" />
                <label className="mdl-textfield__label" htmlFor="sample1">Vintage</label>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
  
}

export default WineList;
