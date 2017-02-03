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
    ];
  }

  getAll() {
    return this.wines;
  }

}

const wineStore = new WineStore;

export default wineStore;
