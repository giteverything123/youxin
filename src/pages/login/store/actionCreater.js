// import axios from 'axios';
import {post} from '../../../common/axios';
import serverConfig from '../../../common/server.config';

export const toLogin = (obj) => {
  return dispatch => {
    let {username, password, history} = obj;
    if (!username || !password) {
      dispatch({type: 'null_tip'});
      setTimeout(() => { dispatch({type: 'tip_miss'})}, 1500);
      return;
    }
    post(serverConfig.baseUrl + '/login', {username, password}).then(result => {
      if (result.data.success) {
        history.push('/home');
      } else {
        dispatch({type: 'login_fail'});
        setTimeout(() => { dispatch({type: 'error_miss'})}, 1500);
      }
    });
  }
}