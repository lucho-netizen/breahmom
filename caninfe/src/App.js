

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Callback from "./components/callback";
import Chat from "./components/chat";
import Adduser from "./components/adduser";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import PrivateRoute from "./components/PrivateRoutes/PrivatRoute";

function App() {
  const user = localStorage.getItem("user")
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/callback" component={Callback} />
        <PrivateRoute path="/chat" component={Chat} />
        <PrivateRoute path="/adduser" component={Adduser} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
