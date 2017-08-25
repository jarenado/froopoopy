export function showModal() {
  return {
    type: "SHOW_MODAL",
    payload: {
      type: "edit"
    }
  }
}


export function hideModal() {
  return {
    type: "HIDE_MODAL",
    payload: {
      type: ""
    }
  }
}
