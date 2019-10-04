import React, { memo } from 'react';
import { connect } from 'react-redux';

import TournamentCard from '../TournamentCard';

export const SearchResult = memo(({ tournaments }) => {
  return (
    <ul className="list-group">
      {tournaments.map(({ id, ...data }) => (
        <TournamentCard
          key={id}
          id={id}
          {...data}
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
