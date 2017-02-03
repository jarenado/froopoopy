// React components
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./Layout";

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={browserHistory}>
	<Route  path="/" component={Layout}>
	</Route>
    </Router>,
    app
);

