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
import { register } from '../../actions/userActions';

const RegisterScreen = ({ location, history }) => {
  // State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const redirect = location.search ? location.search.split('=')[1] : '/';

  //Redux
  const dispatch = useDispatch();
  const userRegister = useSelector(state => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  // Lifecycles
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  // Functions
  const submitHandler = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Les mots de passes ne sont pas identiques');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>S'enregister</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type='name'
            placeholder='Entrer votre nom'
            value={name}
            onChange={e => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Entrer votre email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type='password'
            placeholder='Entrer votre mot de passe'
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirmer le mot de passe</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirmer votre mot de passe'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='my-3 rounded'>
          Enregister
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Vous avez un compte?{' '}
          <Link
            to={redirect ? `/login?redirect=${redirect}` : '/login'}
            className='text-info link'
          >
            Se connecter
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
