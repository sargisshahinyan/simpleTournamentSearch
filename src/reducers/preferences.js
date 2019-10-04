import {
  ADD_TOURNAMENT,
  REMOVE_TOURNAMENT,
  SET_INITIAL_TOURNAMENTS,
} from '../actions/preferences';

import { getInitialState } from '../data/preferences';

const initialState = getInitialState();

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INITIAL_TOURNAMENTS:
      return {
        ...state,
        tournaments: payload,
      };
    case ADD_TOURNAMENT:
      return {
        ...state,
        tournaments: [...state.tournaments, payload],
      };
    case REMOVE_TOURNAMENT:
      return {
        ...state,
        tournaments: state.tournaments.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
}
