// Librairies
import React from 'react';
import { Form, Container, Button, Row } from 'react-bootstrap';
import styled from 'styled-components';

// Styled Components
const Div = styled.div`
  width: 20%;
  margin: 5rem auto;
`;

const Text = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  text-align: center;
`;

const ContentRight = styled.div`
  text-align: right;
`;

const Login = () => {
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
        </Content>
        <ContentRight>
          <Form.Text>
            Mot de passe <a href='#'>oublié?</a>
          </Form.Text>
        </ContentRight>
      </form>
    </Div>
  );
};

export default Login;
