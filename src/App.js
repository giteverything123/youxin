import React from 'react';
import {Provider} from 'react-redux';
import {GlobalStyle} from './style';
import {IconFontGlobal} from './icons/iconfont';
import Router from './router.js';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <IconFontGlobal/>
      <Router/>
    </Provider>
  );
}

export default App;
