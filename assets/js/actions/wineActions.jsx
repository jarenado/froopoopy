export function fetchWines() {
  const id = Date.now()
  return {
    type: "FETCH_WINES",
  }
}

export function addWine() {
  const id = Date.now();
  return {
    type: "ADD_WINE",
    payload: {
      id,
      name: "",
      vintage: 2016,
      editing: true,
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

export function updateWine(id, name) {
  return {
    type: "UPDATE_WINE",
    id: id,
    name: name,
  }
}
