import React, { PureComponent } from 'react';
import autoBind from 'react-autobind';

import SearchBar from '../SearchBar';

export class Home extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <main className="container m-5">
        <SearchBar />
      </main>
    );
  }
}

export default Home;
