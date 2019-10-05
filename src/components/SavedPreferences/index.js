import React, { memo } from 'react';
import { connect } from 'react-redux';

import TournamentCard from '../TournamentCard';

import './styles.scss';

export const SavedPreferences = memo(({ tournaments }) => (
  <ul className="list-group saved-preferences">
    {tournaments.map((tournament) => (
      <TournamentCard
        key={tournament.id}
        tournament={tournament}
      />
    ))}
  </ul>
));

function mapToStateProps({ preferences: { tournaments } }) {
  return {
    tournaments,
  };
}

export default connect(mapToStateProps)(SavedPreferences);
