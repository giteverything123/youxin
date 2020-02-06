import React from 'react';
import { RegisterWrapper } from './style';
import { connect } from 'react-redux';
import { toRegister } from './store/actionCreater';
const Register = (props) => {
  let {username, password1, password2, history, error, tip} = props;
  let {handleUsernameChange, handlePwdChange1, handlePwdChange2, handleRegister} = props;
  return (
    <RegisterWrapper>
      <div className='register-box'>
        <div className='ipt-wrapper'>
          <input type='text' placeholder='用户名' value={username} onChange={handleUsernameChange}/>
        </div>
        <div className='rule'>账号6到16位（字母，数字，下划线，减号）</div>
        <div className='ipt-wrapper'>
          <input type='password' placeholder='密码' value={password1} onChange={handlePwdChange1}/>
        </div>
        <div className='rule'>密码至少包含 数字和英文，长度6-20</div>
        <div className='ipt-wrapper'>
          <input type='password' placeholder='确认密码' value={password2} onChange={handlePwdChange2}/>
        </div>
        
        <div className='submit-box' onClick={() =>handleRegister({username,password1,password2,history})}>注册</div>
      </div>
      <div className={!error ? 'err-box': 'err-box has-error'}>
        <div>{ tip }</div>
      </div>
    </RegisterWrapper>
  )
}

const mapState = state =>({
  username: state.registerReducer.username,
  password1: state.registerReducer.password1,
  password2: state.registerReducer.password2,
  error: state.registerReducer.error,
  tip: state.registerReducer.tip
});

const mapDispatch = dispatch => ({
  handleUsernameChange(e){
    dispatch({type:'change_username',value:e.target.value});
  },
  handlePwdChange1(e) {
    dispatch({
      type: 'change_password1',
      value: e.target.value
    });
  },
  handlePwdChange2(e) {
    dispatch({
      type: 'change_password2',
      value: e.target.value
    });
  },
  handleRegister(obj) {
    dispatch(toRegister(obj));
  }
});
export default connect(mapState, mapDispatch)(Register);