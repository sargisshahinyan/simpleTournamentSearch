import { SET_TOURNAMENTS } from '../actions/tournaments';

import { getInitialState } from '../data/tournaments';

const initialState = getInitialState();

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOURNAMENTS:
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
}
