import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

export function configureStore() {
  return createStore(rootReducer, null, applyMiddleware(thunkMiddleware));
}

export default configureStore;
