import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import MyCart from './pages/Details';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/cart">
          <MyCart />
        </Route>
        <Route path="/details/:id">
          <MyCart />
        </Route>
      </Switch>
    </Router>
  );
}
