export default function (state={wines:[]}, action) {
  switch(action.type) {
    case "FETCH_WINES": {
      return {...state, wines:action.payload}
      break;
    }
    case "TOGGLE_EDIT": {
      if (action.payload.editing) {
        console.log('now false')
      }else {
        console.log('now true')
      }
      break;
    }
    case "ADD_WINE": {
      return {...state, wines:[...state.wines, action.payload]}
      break;
    }
    case "DELETE_WINE": {
      console.log(action.payload)
      return {...state, wines: state.wines.filter(wine =>
        wine.id !== action.payload.id
      )}
      break;
    }
  }
  return state;
};
