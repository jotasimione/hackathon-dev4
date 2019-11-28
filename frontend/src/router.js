import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Game from "./components/Game";
import Main from "./components/Main/Main.js";

export default props => (
  <Switch>
    <Route exact path="/Main" component={Main}></Route>
    <Route exact path="/Game/:id" component={Game}></Route>
    <Redirect from="*" to="/Main" />
  </Switch>
);
