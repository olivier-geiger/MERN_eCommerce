// Librairies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

// Components
import Header from './components/Header/Header';
import Homescreen from './screens/Homescreen/Homescreen';
import Productscreen from './screens/Productscreen/Productscreen';
import Footer from './components/Footer/Footer';
import LoginScreen from './screens/Loginscreen/Loginscreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import Cartscreen from './screens/Cartscreen/Cartscreen';
import Filterscreen from './screens/Filterscreen/Filterscreen';

// Styles
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Header />
      <Route render={({ history }) => <Filterscreen history={history} />} />
      <main className='py-3 bg-light'>
        <Container>
          <Switch>
            <Route path='/' exact component={Homescreen} />
            <Route path='/product/:id' exact component={Productscreen} />
            <Route path='/cart/:id' exact component={Cartscreen} />
            <Route path='/login' exact component={LoginScreen} />
            <Route path='/register' exact component={RegisterScreen} />
            <Route path='/search/:keyword' component={Homescreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
