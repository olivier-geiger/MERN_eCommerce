// Librairies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// Components
import FormContainer from '../../components/FormContainer/FormContainer';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';

// Redux
import { login } from '../../actions/userActions';

const LoginScreen = ({ location, history }) => {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = location.search ? location.search.split('=')[1] : '/';

  //Redux
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  // Lifecycles
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  // Functions
  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
    toast.success(` 😃  Bienvenue sur Easy Shop! `, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <FormContainer>
      <h1>Se connecter</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Entrer votre email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password' className='mt-2'>
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type='password'
            placeholder='Entrer votre mot de passe'
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='my-3 rounded'>
          Se connecter
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Nouveau utilisateur?{' '}
          <Link
            to={redirect ? `/register?redirect=${redirect}` : '/register'}
            className='text-info link'
          >
            Commencer ici
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
