import { EventEmitter } from "events";

class WineStore extends EventEmitter {

  constructor() {
    super();

    this.wines = [
      {
        id: 1123213222,
        label: "Big House Blue",
        qty: 4,
        region: "Napa",
        inStock: true
      },
      {
        id: 3123213222,
        label: "Chaves",
        qty: 4,
        region: "France",
        inStock: false
      },
      {
        id: 3113222,
        label: "Chaves",
        qty: 4,
        region: "France",
        inStock: false
      },
      {
        id: 312222,
        label: "Chaves",
        qty: 4,
        region: "France",
        inStock: false
      },
      {
        id: 3193213222,
        label: "Chaves",
        qty: 4,
        region: "France",
        inStock: false
      },
    ];
  }

  getAll() {
    return this.wines;
  }

  addWine(wineInfo) {
    const id = Date.now();
    this.wines.push({
      id,
      label: wineInfo.label,
      qty: wineInfo.qty,
    });

    this.emit("change");

  }

}

const wineStore = new WineStore;
window.wineStore = wineStore; 

export default wineStore;
