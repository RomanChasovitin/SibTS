import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

export interface RoutesProps {}

const Routes: React.SFC<RoutesProps> = () => {
  return (
    <Switch>
      <Route path='/' component={HomePage} />
    </Switch>
  );
};

export default Routes;
