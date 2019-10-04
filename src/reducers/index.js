import { combineReducers } from 'redux';

import preferences from './preferences';
import tournaments from './tournaments';

export default combineReducers({
  preferences,
  tournaments,
});
