export default function reducer(state={
  user:{
    name: "Carlos",
    age: 38
  }
}, action) {
  if (action.type === "FETCH_USER_FULFILLED") {
    state = {...state, user: action.payload}
  }
  return state;
}
