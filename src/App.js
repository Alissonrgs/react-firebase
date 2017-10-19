import React, { Component } from 'react';
import AppRouter from './router/index'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Store from './store/reducers/index'

import './App.css'

const store = createStore(Store)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
