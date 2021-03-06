const defaultState = {
  username: '',
  password: '',
  haserror: false,
  hasNameAndPwd: false
}
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
export default (state = defaultState, action) => {
  let newState = clone(state);
  switch(action.type) {
    case 'change_username':
      newState.username = action.value;
      return newState;
    case 'change_password':
      newState.password = action.value;
      return newState;
    case 'login_fail':
      newState.haserror = true;
      return newState;
    case 'error_miss':
      newState.haserror = false;
      return newState;
    case 'null_tip':
      newState.hasNameAndPwd = true;
      return newState;
    case 'tip_miss':
      newState.hasNameAndPwd = false;
      return newState;
    default:
      return state;
  }
}