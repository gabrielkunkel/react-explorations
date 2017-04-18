import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import hello from './helloReducer';
import form from './formReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  hello,
  form,
  routing: routerReducer
});

export default rootReducer;
