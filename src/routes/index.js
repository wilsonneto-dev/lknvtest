import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* pages */
import Home from '../pages/Home';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
