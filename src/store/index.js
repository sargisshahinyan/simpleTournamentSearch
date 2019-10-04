import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

import PreferencesSvc from '../services/PreferencesSvc';

import { restoreTournaments } from '../actions/preferences';

function configureStore() {
  const store = createStore(rootReducer, null, applyMiddleware(thunkMiddleware));

  store.dispatch(restoreTournaments());
  store.subscribe(store => {
    PreferencesSvc.savePreferences(store.preferences.tournaments);
  });

  return store;
}

export default configureStore;
