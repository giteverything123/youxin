const defaultState = {
  username: '',
  password1: '',
  password2: '',
  tip: '',
  error: false
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
    case 'change_password1':
      newState.password1 = action.value;
      return newState;
    case 'change_password2':
      newState.password2 = action.value;
      return newState;
    case 'register_tip':
      newState.error = action.value;
      newState.tip = action.tip;
      return newState;
    default:
      return state;
  }
}