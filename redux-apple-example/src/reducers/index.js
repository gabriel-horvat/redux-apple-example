import { combineReducers } from 'redux';
import appleReducer from './appleReducer';

export default combineReducers({
  apple: appleReducer
});
