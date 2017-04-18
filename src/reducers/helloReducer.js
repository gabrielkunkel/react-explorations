import { SAY_HELLO } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function helloReducer(state = initialState.hello, action) {

  switch (action.type) {
    case SAY_HELLO:
      return objectAssign({}, state, { name: "Bob" });
    default:
      return state;
  }
}
