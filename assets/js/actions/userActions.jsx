import {
    FETCH_USER_FULFILLED
} from "../constants/ActionTypes.js"

export function fetchUser() {
  return {
    type: FETCH_USER_FULFILLED,
    payload: {
      name: "Jose",
      age: 40,
      hair: "brown", 
    }
  }
}
