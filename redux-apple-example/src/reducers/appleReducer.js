import {
    WASH,
    EAT,
    ROT
  } from '../actions/types';
  
  const initialState = {
    items: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case WASH:
        return {
          ...state,
          dirty: false
        };
      case EAT:
        return {
          ...state,
          remainingBites: Math.max(0, remainingBites - action.remainingBites)
        };
      case ROT:
        return {
          ...state,
          color: gray 
        };
      default:
        return state;
    }
  }
  