import React, { PureComponent } from 'react';
import { store } from './redux/index.js';
import { Navigation } from './Navigation';
import { Provider } from 'react-redux';

export default class App extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
