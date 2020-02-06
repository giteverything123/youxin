import {combineReducers} from 'redux';
import {reducer as loginReducer} from '../pages/login/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as registerReducer} from '../pages/register/store';
export default combineReducers({
  loginReducer,
  homeReducer,
  registerReducer
});