import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../store';

import Home from '../../components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <Provider store={configureStore()}>
      <Home />
    </Provider>
  );
}

export default App;
