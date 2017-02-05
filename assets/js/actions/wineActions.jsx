export function fetchWines() {
  const id = Date.now();
  return {
    type: "FETCH_WINES",
    payload: [
      {
        id,
        name: "wine one",
        vintage: 2014,
      },
      {
        id,
        name: "wine two",
        vintage: 2014,
      },
   ] 
  }
}

export function addWine() {
  const id = Date.now();
  return {
    type: "ADD_WINE",
    payload: {
      id,
      name: "wine three",
      vintage: 2016,
    } 
  }
}
