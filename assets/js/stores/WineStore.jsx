import { applyMiddleware, createStore } from "redux";

import createLogger from "redux-logger";
import thunk from 'redux-thunk';

/*import { reducer } from "../reducers";*/
const reducer = function(state={user: {
    name: "dude",
    age: 35,
}}, action) {
    if (action.type === "FETCH_USER_FULFILLED") {
	state = {...state, user: action.payload}
    }
    return state;
}

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);


export default createStore(reducer, middleware);
