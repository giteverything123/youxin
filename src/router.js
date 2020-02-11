import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import ForeEnd from './pages/foreend';
import Webpack from './pages/foreend/pages/webpack'
export default () => (
  <Router>
    <Route path='/login' exact component={Login}></Route>
    <Route path='/home' exact component={Home}></Route>
    <Route path='/register' exact component={Register}></Route>
    <Route render={() => (
      <ForeEnd>
        <Route render={()=>(
          <>
          <Route path='/foreend/webpack' exact component={Webpack}/>
          <Route path='/foreend/webpack-01' exact component={Webpack.chapter01}/>
          </>
        )}>
        </Route>
        
      </ForeEnd>
    )}>
    </Route>
  </Router>
)
