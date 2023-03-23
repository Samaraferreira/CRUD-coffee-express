import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Delivery from '../pages/Delivery';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Delivery} />
    <Route path="/admin" exact component={Dashboard} />
  </Switch>
);

export default Routes;
