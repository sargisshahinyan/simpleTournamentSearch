import { SET_TOURNAMENTS } from '../actions/tournaments';

import { getInitialState } from '../data/tournaments';

const initialState = getInitialState();

export default (store = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOURNAMENTS:
      return {
        ...store,
        tournaments: payload,
      };
    default:
      return store;
  }
}
