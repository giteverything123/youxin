import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import ForeEnd from './pages/foreend';
import Webpack from './pages/foreend/pages/webpack'
import{Redirect} from 'react-router-dom';
export default () => (
  <Router>
    <Route path='/login' exact component={Login}></Route>
    <Route path='/home' exact component={Home}></Route>
    <Route path='/register' exact component={Register}></Route>
    <Route path='/foreend' render={() => (
      <ForeEnd>
        <Redirect exact to="/foreend/webpack" from='/' />
        <Route path='/foreend/webpack' exact component={Webpack}></Route>
      </ForeEnd>
    )}>
    </Route>
  </Router>
)
