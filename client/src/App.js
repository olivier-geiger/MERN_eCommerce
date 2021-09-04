// Librairies
import React from 'react';

// Components
import Navigation from './components/Navigation/Navigation';
// import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

// Styles
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <SignUp />
    </div>
  );
}

export default App;
