import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import GamesPage from '../components/GamesPage';
import EditPage from '../components/EditPage';
import LoginPage from '../components/LoginPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={GamesPage} exact={true} />
        <Route path="/login" component={LoginPage} />
        <Route path="/setings" component={EditPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
