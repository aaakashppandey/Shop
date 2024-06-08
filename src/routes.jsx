// src/routes.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default Routes;
