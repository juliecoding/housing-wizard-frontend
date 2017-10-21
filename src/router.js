import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import Wizard1 from './components/subWizards/Wizard1';

export default (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/dashboard" component={ Dashboard } />
    <Route path="/wizard" component={ Wizard } />
  </Switch>
)

// <Link to={`/product/${product.id}`}>{product.title}</Link>
