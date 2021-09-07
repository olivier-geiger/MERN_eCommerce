// Librairies
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

// Components
import FormContainer from '../../components/FormContainer/FormContainer';

const LoginScreen = () => {
  return (
    <FormContainer>
      <h1>Se connecter</h1>

      <Form>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Entrer votre email'></Form.Control>
        </Form.Group>

        <Form.Group controlId='password' className='mt-2'>
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type='password'
            placeholder='Entrer votre mot de passe'
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='my-3 rounded'>
          Se connecter
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Nouveau utilisateur?{' '}
          <Link to='/register' className='text-info'>
            S'enregistrer
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
