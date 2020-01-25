import TournamentsSvc from '../services/TournamentsSvc';

export const SET_TOURNAMENTS = 'SET_TOURNAMENTS';

export const setTournaments = (tournaments) => ({
  type: SET_TOURNAMENTS,
  payload: tournaments,
});

export const loadTournaments = q => (
  async (dispatch, getState) => {
    let tournaments = await TournamentsSvc.getTournaments(q);

    const { tournaments: savedTournaments } = getState().preferences;
    const savedTournamentIds = savedTournaments.map(item => item.id);

    tournaments = tournaments.filter(tournament => !savedTournamentIds.includes(tournament.id));

    dispatch(setTournaments(tournaments));
  }
);

export const resetTournaments = _ => setTournaments([]);
