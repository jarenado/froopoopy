import _ from "lodash"

const initialState = {
  type: null,
}

export default function (state = {modal:{type:""}}, action) {
  switch(action.type) {
    case "SHOW_MODAL": {
      return {
        ...state,
        modal:{
          type: action.payload.type
        } 
      }
      break;
    }
  }
  return state;
}
