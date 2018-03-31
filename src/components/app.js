import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TestPage from '../containers/TestPage';

import Form1 from '../containers/Form1';
import Form2 from '../containers/Form2';
import Form3 from '../containers/Form3';

import NotFoundPage from './NotFoundPage';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/form1" component={Form1} /> 
          <Route path="/form2" component={Form2} /> 
          <Route path="/form3" component={Form3} /> 

          <Route path="/tests" component={TestPage} /> 
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
