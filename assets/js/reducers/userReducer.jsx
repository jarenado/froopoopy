export default function reducer(state={
  user: {
    name: "dude",
    age: 35,
}}, action) {
    if (action.type === "FETCH_USER_FULFILLED") {
	state = {...state, user: action.payload}
    }
    return state;
}
};
