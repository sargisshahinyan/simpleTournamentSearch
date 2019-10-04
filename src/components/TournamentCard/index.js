import React, { memo } from 'react';

import './styles.scss';

export const TournamentCard = memo(
  ({ title, description, images }) => (
    <li className="list-group-item tournament-card">
      <h6 className="title">{title}</h6>
      <p className="description">
        <small>{description}</small>
      </p>
    </li>
  )
);

export default TournamentCard;
