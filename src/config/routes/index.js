import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";
import About from "../../pages/About";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import AddUser from "../../pages/AddUser";

const index = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/add-user">
          <AddUser />
        </Route>
      </Switch>
    </Router>
  );
};

export default index;
