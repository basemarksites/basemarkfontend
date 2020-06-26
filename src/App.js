import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import Login from './components/Login';
import RecoverPassword from './components/RecoverPassword';
import Registration from './components/Registration';
import Navigation from './components/Navigation';
import NavigationBar from './components/NavigationBar';


function App() {
  return (
    <Router>
      <Route exact path='/' component={Welcome} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/recoverpassword' component={RecoverPassword} />
      <Route exact path='/register' component={Registration} />

      <Route exact path='/navigation' component={Navigation} />
      <Route exact path='/navigationbar' component={NavigationBar} />




    </Router>

  );
}

export default App;
