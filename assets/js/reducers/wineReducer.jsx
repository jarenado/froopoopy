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
    }
    return state;
};
