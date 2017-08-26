import {
  SHOW_MODAL,
  HIDE_MODAL
} from "../constants/ActionTypes.js"

export function showModal(id) {
  return (dispatch, getState) => {
    console.log(getState().wines.wines[id])
    dispatch ({
        type: "SHOW_MODAL",
        payload: {
          isShowing: true,
          wine: getState().wines.wines[id]
        }
    })
  }
}


export function hideModal() {
  return {
    type: HIDE_MODAL,
    payload: {
      isShowing: false 
    }
  }
}
