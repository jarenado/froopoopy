import { applyMiddleware, createStore, combineReducers } from "redux";

import createLogger from "redux-logger";
import thunk from 'redux-thunk';

/*import { reducer } from "../reducers";*/
import user from "../reducers/userReducer";
import wines from "../reducers/wineReducer";

const reducer = combineReducers({
    user,
    wines
});

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);


export default createStore(reducer, middleware);
