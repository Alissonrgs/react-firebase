import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';

import './App.css';


const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
