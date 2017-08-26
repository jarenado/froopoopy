import _ from "lodash"

const initialState = {
  type: null,
}

export default function (state = {modal:{isShowing:false, wine:{}}}, action) {
  switch(action.type) {
    case "SHOW_MODAL": {
      return {
        ...state,
        modal:{
          isShowing: action.payload.isShowing,
          wine: action.payload.wine
        } 
      }
      break;
    }

    case "HIDE_MODAL": {
      return {
        ...state,
        modal:{
          isShowing: action.payload.isShowing,
        } 
      }
      break;
    }
  }
  return state;
}
