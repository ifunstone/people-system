import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IndexPage, DetailPage } from "./pages";
import App from './App';
import "./index.css";
import './App.less';

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <App>
    <Switch>
      <Route path="/index">
        <IndexPage />
      </Route>
      <Route path="/detail">
        <DetailPage />
      </Route>
      <Route path="/">
        <IndexPage />
      </Route>
    </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
