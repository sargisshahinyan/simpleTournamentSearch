import React, { memo } from 'react';
import { connect } from 'react-redux';

import TournamentCard from '../TournamentCard';

import './styles.scss';

export const SearchResult = memo(({ tournaments }) => (
  <div className="search-result">
    <ul className="list-group">
      {tournaments.map((tournament) => (
        <TournamentCard
          key={tournament.id}
          tournament={tournament}
          searchResult
        />
      ))}
    </ul>
  </div>
));

function mapToStateProps(state) {
  const { tournaments: { list: tournaments } } = state;

  return {
    tournaments,
  };
}

export default connect(mapToStateProps)(SearchResult);
