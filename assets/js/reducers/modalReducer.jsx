import _ from "lodash"

import {
  SHOW_MODAL,
  HIDE_MODAL
} from "../constants/ActionTypes.js"

const initialState = {
  type: null,
}

export default function (state = {modal:{type:""}}, action) {
  switch(action.type) {
    case SHOW_MODAL: {
      return {
        ...state,
        modal:{
          type: action.payload.type
        } 
      }
      break;
    }

    case HIDE_MODAL: {
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
