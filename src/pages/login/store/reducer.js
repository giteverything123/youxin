const defaultState = {
  username: '',
  password: ''
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
    default:
      return state;
  }
}