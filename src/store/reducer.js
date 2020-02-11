import {combineReducers} from 'redux';
import {reducer as loginReducer} from '../pages/login/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as registerReducer} from '../pages/register/store';
import {reducer as foreendReducer} from '../pages/foreend/store';
import {default as globalReducer} from './globalReducer';
export default combineReducers({
  globalReducer,
  loginReducer,
  homeReducer,
  registerReducer,
  foreendReducer
});