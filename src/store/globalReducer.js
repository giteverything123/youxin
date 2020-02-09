const defaultState = {
  showBeside: false
}
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
export default (state = defaultState, action) => {
  let newState = clone(state);
  switch(action.type) {
    case 'global_beside_show':
      newState.showBeside = !state.showBeside;
      return newState;
    default:
      return state;
  }
}