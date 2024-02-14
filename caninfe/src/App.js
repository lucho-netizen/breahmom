

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Callback from "./components/callback";
import Chat from "./components/chat";
import Adduser from "./components/adduser";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/callback" component={Callback} />
        <Route path="/chat" component={Chat} />
        <Route path="/adduser" component={Adduser} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
