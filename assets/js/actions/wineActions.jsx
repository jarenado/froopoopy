export function fetchWines() {
  return {
    type: "FETCH_WINES",
    payload: [
      {
        name: "wine one",
        vintage: 2014,
      },
      {
        name: "wine two",
        vintage: 2014,
      },
   ] 
  }
}
