import { UPDATE_SCROLL, UPDATE_SCROLLMAX, UPDATE_STARTEND } from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SCROLL:
      // return new instane
      return { ...state, animValue: action.animValue };
    case UPDATE_SCROLLMAX:
      // return new instane
      return { ...state, max: action.max };
    case UPDATE_STARTEND:
      // return new instane
      return { ...state, start: action.start, end: action.end };
    default:
      return state;
  }
};

// initialize global state object, more advanced useState hook
export function useScrollReducer(initialState) {
  return useReducer(reducer, initialState);
}
