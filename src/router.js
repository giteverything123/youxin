import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
export default () => (
  <Router>
    <Route path='/login' exact component={Login}></Route>
    <Route path='/home' exact component={Home}></Route>
    <Route path='/register' exact component={Register}></Route>
  </Router>
)
