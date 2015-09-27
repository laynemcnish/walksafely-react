import apiMiddleware from '../util/middleware/api';
import * as reducers from '../reducers';
import initStore, { createRootReducer } from '../util/init_store';

const store = initStore(reducers, apiMiddleware);

if (__DEV__ && module.hot) {
  module.hot.accept('../reducers', () => {
    const nextReducers = require('../reducers/index');
    store.replaceReducer(createRootReducer(nextReducers));
  });
}

export default store;
