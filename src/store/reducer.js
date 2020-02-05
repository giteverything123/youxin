import {combineReducers} from 'redux';
import {reducer as loginReducer} from '../pages/login/store';
import {reducer as homeReducer} from '../pages/home/store';
export default combineReducers({
  loginReducer,
  homeReducer
});