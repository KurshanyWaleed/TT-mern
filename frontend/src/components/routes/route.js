import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Feed from "../pages/feed";
import Log from "../pages/logIn/index";

export default function route() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/feed" exact component={Feed} />
          <Route path="/" exact component={Log} />
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}
