import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Compare from '../Compare/Compare';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/compare' component={Compare}></Route>
    </Switch>
  );
}

export default Main;