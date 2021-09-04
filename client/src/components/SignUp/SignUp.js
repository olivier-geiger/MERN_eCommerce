// Librairies
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

// Styled Components
const Div = styled.div`
  max-width: 50%;
  min-height: 70vh;
  margin: 5rem auto;
  background-color: #d3e0ea;
  padding: 2rem;
  border-radius: 7px;
`;

const Text = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  text-align: center;
`;

const SignUp = () => {
  return (
    <Div>
      <form>
        <Form.Text className='text-center'>
          <Text>S'inscrire</Text>
        </Form.Text>

        <Form>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type='text'
            className='form-control my-1'
            placeholder='Entrer votre nom'
          />
        </Form>

        <Form>
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type='text'
            className='form-control my-1'
            placeholder='Entrer votre prénom'
          />
        </Form>

        <Form>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            className='form-control my-1'
            placeholder='Enter email'
          />
        </Form>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            className='form-control my-1'
            placeholder='Entrer votre mot de passe'
          />
        </Form.Group>
        <Content>
          <Button type='submit' className='btn btn-dark btn-lg btn-block my-2 m-auto'>
            S'inscrire
          </Button>
          <br />
          <Form.Text>
            déjà <a href='#'>inscrit?</a>
          </Form.Text>
        </Content>
      </form>
    </Div>
  );
};

export default SignUp;
