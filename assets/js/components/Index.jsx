// React components
/*import React from 'react';
 *import ReactDOM from 'react-dom';
 *import { Router, Route, IndexRoute, browserHistory } from "react-router";
 *
 *import Layout from "./Layout";
 *
 *const app = document.getElementById('app');
 *ReactDOM.render(
 *    <Router history={browserHistory}>
 *	<Route  path="/" component={Layout}>
 *	</Route>
 *    </Router>,
 *    app
 *);
 **/

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import axios from 'axios';
import createLogger from "redux-logger";

const userReducer = (state={}, action) => {
  switch(action.type) {
    case "CHANGE_NAME": {
      state = {...state, name: action.payload };
      break;
    }
    case "CHANGE_AGE": {
      state = {...state, age: action.payload };
      break;
    }
  }
  return state;
};

const wineReducer = (state={}, action) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  wine: wineReducer
});


const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState())
});

store.dispatch((dispatch) => {
  dispatch({type: "FETCH_WINES_START" });
  /*axios.get("http://rest.learncode.academy/api/wstern/users")*/
  axios.get("http://services.wine.com/api/beta2/service.svc/json/catalog?apiKey=0b48cc9c67fb2b18523afd8557c068b5")
       .then((response) => {
         dispatch({type: "RECEIVE_USERS", payload: response.data });
       });
});

