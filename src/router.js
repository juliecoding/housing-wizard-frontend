import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
// import Dashboard from './components/Dashboard/Dashboard';
// import Wizard from './components/Wizard/Wizard';

export default (
  <Switch>
    <Route component={ Login } exact path="/" />
    {/* <Route component={ Dashboard } exact path="/dashboard" />
    <Route component={ Wizard } exact path="/details/:step_number" /> */}
  </Switch>
)
