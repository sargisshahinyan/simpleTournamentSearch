import PreferencesSvc from '../services/PreferencesSvc';

export const SET_INITIAL_TOURNAMENTS = 'SET_INITIAL_TOURNAMENTS';
export const ADD_TOURNAMENT = 'ADD_TOURNAMENT';
export const REMOVE_TOURNAMENT = 'REMOVE_TOURNAMENT';

export const addTournament = (tournament) => ({
  type: ADD_TOURNAMENT,
  payload: tournament,
});

export const removeTournament = (tournamentId) => ({
  type: REMOVE_TOURNAMENT,
  payload: tournamentId,
});

export const setInitialTournaments = (tournaments) => ({
  type: SET_INITIAL_TOURNAMENTS,
  payload: tournaments,
});

export const restoreTournaments = () => (
  async dispatch => {
    const tournaments = await PreferencesSvc.restorePreferences();

    dispatch(setInitialTournaments(tournaments));
  }
);
