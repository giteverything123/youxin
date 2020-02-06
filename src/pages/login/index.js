import React from 'react';
import { LoginWrapper } from './style';
import { connect } from 'react-redux';
import { toLogin } from './store/actionCreater';
import {Link} from 'react-router-dom';

const Login = (props) => {
  let {username, password, history, haserror, hasNameAndPwd} = props;
  let {handleLogin, handleUsernameChange, handlePwdChange} = props;
  return (
    <LoginWrapper>
      <div className='login-box'>
        <div className='ipt-wrapper'>
          <input type='text' placeholder='用户名' value={username} onChange={handleUsernameChange}/>
        </div>
        <div className='ipt-wrapper'>
          <input type='password' placeholder='密码' value={password} onChange={handlePwdChange}/>
        </div>
        <div className='submit-box'>
          <div onClick={() =>handleLogin({username,password, history})}>登录</div>
        </div>
        <div className='redirect-box'>
          <div><Link to='/register'>去注册</Link></div>
          <div>忘记密码</div>
        </div>
        
      </div>
      <div className={haserror ? 'err-box has-error': 'err-box'}>
        <div>账号或密码错误</div>
      </div>
      <div className={!hasNameAndPwd ? 'err-box': 'err-box has-error'}>
        <div>账号和密码不能为空</div>
      </div>
    </LoginWrapper>
  );
}

const mapState = (state) => ({
  username: state.loginReducer.username,
  password: state.loginReducer.password,
  haserror: state.loginReducer.haserror,
  hasNameAndPwd: state.loginReducer.hasNameAndPwd
});

const mapDispatch = dispatch => ({
  handleUsernameChange(e) {
    dispatch({
      type: 'change_username',
      value: e.target.value
    });
  },
  handlePwdChange(e) {
    dispatch({
      type: 'change_password',
      value: e.target.value
    });
  },
  handleLogin(obj) {
    dispatch(toLogin(obj));
  }
});

export default connect(mapState,mapDispatch)(Login);