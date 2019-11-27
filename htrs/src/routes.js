/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';
import Login from './pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" exact component={Home} />
      <Route path="/main" exact component={Main} />
      <Route path="/teacher" exact component={Main} />
      <Route path="/school" exact component={Main} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  );
}

// TODO 404
