// Librairies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

// Components
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import FormContainer from '../../components/FormContainer/FormContainer';

const RegisterScreen = () => {
  return (
    <FormContainer>
      <h1>S'enregister</h1>

      <Form>
        <Form.Group controlId='name'>
          <Form.Label>Nom</Form.Label>
          <Form.Control type='name' placeholder='Entrer votre nom'></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Entrer votre email'></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type='password'
            placeholder='Entrer votre mot de passe'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirmer le mot de passe</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirmer votre mot de passe'
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='my-3 rounded'>
          Enregister
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Vous avez un compte?{' '}
          <Link to='/login' className='text-info'>
            Se connecter
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
