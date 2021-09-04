// Librairies
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

// Styled Components
const Div = styled.div`
  max-width: 50%;
  min-height: 50vh;
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

const SignIn = () => {
  return (
    <Div>
      <form>
        <Form.Text className='text-center'>
          <Text>Se Connecter</Text>
        </Form.Text>

        <Form>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            className='form-control my-1'
            placeholder='Entrer votre email'
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
          <Form.Group>
            <Form.Label className='my-1' htmlFor='customCheck1'>
              Se rappeller
            </Form.Label>
          </Form.Group>

          <Button type='submit' className='btn btn-dark btn-lg btn-block my-2 m-auto'>
            Se connecter
          </Button>
          <br />
          <Form.Text>
            Mot de passe <a href='#'>oublié?</a>
          </Form.Text>
        </Content>
      </form>
    </Div>
  );
};

export default SignIn;
