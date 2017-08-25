import { applyMiddleware, createStore, combineReducers } from "redux";

import createLogger from "redux-logger";
import thunk from 'redux-thunk';

/*import { reducer } from "../reducers";*/
import user from "../reducers/userReducer";
import wines from "../reducers/wineReducer";
import modal from "../reducers/modalReducer";

const reducer = combineReducers({
    user,
    wines,
    modal
});

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

export default createStore(reducer, middleware);
