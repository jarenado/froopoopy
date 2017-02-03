import React from 'react';

import Header from "./Header";
import Footer from "./Footer";

import Wine from "./Wine";
import WineStore from "../stores/WineStore";

class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      wines: WineStore.getAll(),
    }
  }

  render() {

    const { wines } = this.state;

    const WineComponents = wines.map((wine) =>{
      return <Wine key={wine.id} {...wine} />;
    });

    const listStyle = {
        paddingLeft: "0",
    }

    return (
      <div className="container-fluid">
        {/* <Header /> */}
        <h2>Wines</h2>
        <ul style={listStyle}>{WineComponents}</ul>
        <Footer />
      </div>
    );
  }
}

export default Layout;
