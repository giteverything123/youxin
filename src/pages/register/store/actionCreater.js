// import axios from 'axios';
import {post} from '../../../common/axios';
import serverConfig from '../../../common/server.config';

export const toRegister = (obj) => {
  return dispatch => {
    let {username, password1, password2, history} = obj;
    //用户名正则，6到16位（字母，数字，下划线，减号）
    const userNameReg = /^[a-zA-Z0-9_-]{6,16}$/;
    //密码至少包含 数字和英文，长度6-20
    const pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    if (!username || !password1 || !password2) {                                              
      dispatch({type: 'register_tip',value: true, tip: '账号或密码没填'});
      setTimeout(() => { dispatch({type: 'register_tip', value: false})}, 1500);
      return;
    }
    if (password1 !== password2) {
      dispatch({type: 'register_tip', value: true, tip: '密码不一致'});
      setTimeout(() => {dispatch({type: 'register_tip', value: false})}, 1500);
      return;
    }
    if (!userNameReg.test(username)) {
      dispatch({type: 'register_tip', value: true, tip: '账号规则不符合'});
      setTimeout(() => {dispatch({type: 'register_tip', value: false})}, 1500);
      return;
    }
    if (!pwdReg.test(password1)) {
      dispatch({type: 'register_tip', value: true, tip: '密码规则不符合'});
      setTimeout(() => {dispatch({type: 'register_tip', value: false})}, 1500);
      return;
    }
    post(serverConfig.baseUrl + '/register', {username, password1}).then(result => {
      const data = result.data;
      if (data.success) {
        history.push('/login');
      } else {
        dispatch({type: 'register_tip', value: true, tip: data.msg});
        setTimeout(() => { dispatch({type: 'register_tip', value: false})}, 1500);
      }
    });
  }
}