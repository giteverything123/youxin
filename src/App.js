import React from 'react';
import {Provider} from 'react-redux';
import {GlobalStyle} from './style';
import Router from './router.js';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Router/>
    </Provider>
  );
}

export default App;
