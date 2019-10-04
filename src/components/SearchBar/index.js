import React, { PureComponent } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import { loadTournaments, resetTournaments } from '../../actions/tournaments';

export class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      searchBarValue: '',
    };
  }

  setSearchBarValue({ target: { value } }) {
    const { searchTournaments } = this.props;

    this.setState({
      searchBarValue: value,
    }, () => searchTournaments(this.state.searchBarValue));
  }

  render() {
    const { searchBarValue } = this.state;

    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Tournaments"
          value={searchBarValue}
          onChange={this.setSearchBarValue}
        />
      </div>
    );
  }
}

function mapToDispatchProps(dispatch) {
  return {
    loadTournaments: q => dispatch(loadTournaments(q)),
    resetTournaments: () => dispatch(resetTournaments()),
  };
}

const mergeProps = (() => {
  let searchTimer = 0;

  return (stateProps, { loadTournaments, resetTournaments }) => ({
    searchTournaments(q) {
      clearTimeout(searchTimer);

      if (q && q.length > 1) {
        searchTimer = setTimeout(() => loadTournaments(q), 400);
      } else {
        resetTournaments();
      }
    }
  });
})();

export default connect(null, mapToDispatchProps, mergeProps)(SearchBar);
