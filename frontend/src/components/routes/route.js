import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Feed from "../pages/feed";
import Log from "../pages/logIn/index";
import { UidContext } from "../AppContext";
import Navbar from "../Navbar";

export default function Routing() {
  const uid = useContext(UidContext);
  return (
    <div>
      {uid ? (
        <Router>
          <Switch>
            <Route path="/" exact component={Feed} />
            <Redirect to="/"></Redirect>
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route path="/" exact component={Log}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </Router>
      )}
    </div>
  );
}
