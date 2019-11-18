import {
    WASH,
    EAT,
    ROT
  } from '../actions/types';
  
  const initialState = {
    color: "red",
    dirty: true,
    remainingBites: 7

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
          remainingBites: (state.remainingBites - action.bites)
        };
      case ROT:
        return {
          ...state,
          color: "brown" 
        };
      default:
        return state;
    }
  }
  