import React from 'react';
import { LoginWrapper } from './style';
import { connect } from 'react-redux';

const Login = (props) => {
  return (
    <LoginWrapper>
      <div className='login-box'>
        <div className='ipt-wrapper'>
          <input type='text' placeholder='用户名' value={props.username} onChange={props.handleUsernameChange}/>
        </div>
        <div className='ipt-wrapper'>
          <input type='password' placeholder='密码' value={props.password} onChange={props.handlePwdChange}/>
        </div>
        <div className='submit-box'>
          <div onClick={props.handleLogin}>登录</div>
          <div>注册</div>
        </div>
      </div>
    </LoginWrapper>
  );
}

const mapState = (state) => ({
  username: state.loginReducer.username,
  password: state.loginReducer.password
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
    })
  },
  handleLogin() {
    dispatch({
      action: 'login'
    });
  }
});

export default connect(mapState,mapDispatch)(Login);