import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from '../components/home';
import About from '../components/about';
import Login from '../components/login';
import Dashboard from '../components/dashboard';
import Http404 from '../components/http404';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />

        <Route path="/dashboard" component={Dashboard} />

        <Route component={Http404} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter