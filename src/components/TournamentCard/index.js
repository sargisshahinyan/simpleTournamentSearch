import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTournament } from '../../actions/preferences';

import './styles.scss';

export const TournamentCard = memo(
  ({ tournament: {title, description}, addTournament }) => (
    <li className="list-group-item tournament-card" onClick={addTournament}>
      <h6 className="title">{title}</h6>
      <p className="description">
        <small>{description}</small>
      </p>
    </li>
  )
);

TournamentCard.propTypes = {
  searchResult: PropTypes.bool,
};

TournamentCard.defaultProps = {
  searchResult: false,
};

function mapToDispatchProps(dispatch, { tournament }) {
  return {
    addTournament: () => dispatch(addTournament(tournament)),
  };
}

export default connect(null, mapToDispatchProps)(TournamentCard);
