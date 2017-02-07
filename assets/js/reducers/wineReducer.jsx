export default function (state={wines:[]}, action) {
    switch(action.type) {
      case "FETCH_WINES": {
        return {...state, wines:action.payload}
        break;
      }
      case "ADD_WINE": {
        return {...state, wines:[...state.wines, action.payload]}
        break;
      }
      case "DELETE_WINE": {
	return {...state, wines: [...state.wines].splice(action.payload, 1)}
	break;
      }
    }
    return state;
};
