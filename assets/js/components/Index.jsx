// React components
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import { Router, Route, IndexRoute, browserHistory } from "react-router";

import store from "../stores/WineStore";

import Layout from "./Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
	<Route  path="/" component={Layout}>
	</Route>
    </Router>
  </Provider>,
    app
);
