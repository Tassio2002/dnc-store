import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import MyCart from './pages/Cart';
import { products } from './data/products';

/**
 * criar rotas dinamicas com o id dos produtos e montar tela de details
 * de acordo com o id da rota /details/:id
 */

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
        {products.map((product) => (
          <Route path={`/details/${product.id}`}>
            <MyCart />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
