import database from './database.js';

export function fetchWines() {
  return dispatch => {
    database.ref('wines').on('value', snapshot => {
      dispatch({
        type: "FETCH_WINES",
        payload: snapshot.val()
      })
    });
  }
}


export function addWine() {
  return dispatch => {
  const payload = {
     name: "this is the name",
     vintage: 2016,
     editing: true,
   }
  database.ref('wines/wines').push(payload)
  }


  /* return {*/
  /* type: "ADD_WINE",*/
  /* payload: {*/
  /* id,*/
  /* name: "",*/
  /* vintage: 2016,*/
  /* editing: true,*/
  /* } */
  /* }*/
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
