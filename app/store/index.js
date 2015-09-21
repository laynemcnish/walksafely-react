import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers';

function createStoreWithMiddleware () {
  console.log('found store');
  const reducer = combineReducers(reducers);

  return applyMiddleware(thunkMiddleware)(createStore)(reducer);
}


export default createStoreWithMiddleware();
