import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
  Container,
} from 'react-bootstrap';

const Navigation = () => {
  return (
    <Container>
      <Navbar bg='light' expand='lg' collapseOnSelect>
        <Navbar.Brand>
          <LinkContainer to='/' className='mx-5 text-dark'>
            <Nav.Link>eCommerce</Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='m-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/articles'>
              <Nav.Link>Articles</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>

            <NavDropdown title='Connexion' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3'>
                <LinkContainer to='/signin'>
                  <Nav.Link>
                    <i class='fas fa-sign-in-alt px-2'>
                      <span>Se connecter</span>
                    </i>
                  </Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item href='#action4'>
                <LinkContainer to='/signup'>
                  <Nav.Link>
                    <i class='fas fa-sign-out-alt mx-2'>
                      <span>Se déconnecter</span>
                    </i>
                  </Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Rechercher...'
              className='mr-2'
              aria-label='Search'
            />
            <Button className='mx-3' variant='outline-success'>
              Rechercher
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
