import React, { memo } from 'react';
import { connect } from 'react-redux';

import TournamentCard from '../TournamentCard';

export const SearchResult = memo(({ tournaments }) => {
  return (
    <ul className="list-group">
      {tournaments.map((tournament) => (
        <TournamentCard
          key={tournament.id}
          tournament={tournament}
          searchResult
        />
      ))}
    </ul>
  )
});

function mapToStateProps(state) {
  const { tournaments: { list: tournaments } } = state;

  return {
    tournaments,
  };
}

export default connect(mapToStateProps)(SearchResult);
