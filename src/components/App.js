import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import '../assets/css/style.css'

import AppRouter from '../router/index'
import Store from '../reducers/index'


const store = createStore(Store)

class App extends Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;