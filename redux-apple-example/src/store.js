import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const initialState = {};


const store = createStore(
  rootReducer
  )

export default store;
