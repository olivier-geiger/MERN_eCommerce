// Librairies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

// Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
