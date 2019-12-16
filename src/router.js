import React from "react";
import { Router, Route, Switch } from "dva/router";
import { IndexPage, DetailPage } from "./pages";
import App from './App'
import './App.less';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/detail/:index" component={DetailPage} >
          </Route>
        </Switch>
      </App>
    </Router>
  );
}

export default RouterConfig;
