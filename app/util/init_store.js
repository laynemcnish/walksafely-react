import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { batchedUpdates } from 'redux-batched-updates';


export default function initStore (reducers, middleware) {
  if (__DEV__) {
    const reduxDev = require('redux-devtools');
    const devTools = reduxDev.devTools;
    const persistState = reduxDev.persistState;

    const finalCreateStore = batchedUpdates(compose(
      devTools(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore));

    const loggedReducer = createRootReducer(reducers);

    return applyMiddleware(middleware)(finalCreateStore)(loggedReducer);
  }
  else {
    const reducer = createRootReducer(reducers);
    const finalCreateStore = batchedUpdates(createStore);
    return applyMiddleware(middleware)(finalCreateStore)(reducer);
  }
}


export function createRootReducer (reducers) {
  if (__DEV__) {
    const logSlowReducers = require('./dev_log_slow_reducers');
    return combineReducers(logSlowReducers(reducers));
  }
  else
    combineReducers(reducers);
}
