import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
export default () => (
  <Router>
    <Route path='/login' component={Login}></Route>
    <Route path='/home' component={Home}></Route>
  </Router>
)
