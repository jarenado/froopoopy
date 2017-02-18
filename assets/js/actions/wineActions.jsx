export function fetchWines() {
  return {
    type: "FETCH_WINES",
    payload: [
      {
        id: 1,
        name: "wine one",
        vintage: 2014,
	editing: true,
      },
      {
	id: 2,
        name: "wine two",
        vintage: 2014,
	editing: false,
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

export function deleteWine(id) {
  return {
    type: "DELETE_WINE",
    payload: {
      id,
    } 
  }
}

export function startEdit(editing, id) {
  return {
    type: "TOGGLE_EDIT",
    id: id,
    editing: editing,
  }
}

export function saveWine(id, name) {
  return {
    type: "UPDATE_WINE",
    id: id,
    name: name,
  }
}
