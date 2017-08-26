export function showModal(id) {
  return (dispatch, getState) => {
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
    type: "HIDE_MODAL",
    payload: {
      isShowing: false 
    }
  }
}
