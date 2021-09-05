// Librairies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Components
import Header from './components/Header/Header';
import Homescreen from './screens/Homescreen/Homescreen';
import Productscreen from './screens/Productscreen/Productscreen';
import Footer from './components/Footer/Footer';
import LoginScreen from './screens/Loginscreen/Loginscreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3 bg-light'>
        <Container>
          <Switch>
            <Route path='/' exact component={Homescreen} />
            <Route path='/product/:id' exact component={Productscreen} />
            <Route path='/login' exact component={LoginScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
