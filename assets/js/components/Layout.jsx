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

    const buttonStyle = {
        padding: "10px",
        background: "gray"
    }

    return (
      <div>
        <Header />
        <h1>Wines</h1>
        <ul>{WineComponents}</ul>
        <button style={buttonStyle}>click me say hi</button>
        <Footer />
      </div>
    );
  }
}

export default Layout;
