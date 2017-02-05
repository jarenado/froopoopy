export default function (state={wines:[]}, action) {
    if (action.type === "FETCH_WINES") {
	state = {...state, wines:action.payload}
    }
    return state;
};
