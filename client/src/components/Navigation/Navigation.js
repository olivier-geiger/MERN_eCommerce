import React from 'react';
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
        <Navbar.Brand href='#' className='mx-5'>
          eCommerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='m-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='#action1'>Home</Nav.Link>
            <Nav.Link href='#action2'>Articles</Nav.Link>
            <Nav.Link href='#action2'>Contact</Nav.Link>
            <NavDropdown title='Connexion' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3'>
                <i class='fas fa-sign-in-alt px-2'>Se connecter</i>
              </NavDropdown.Item>
              <NavDropdown.Item href='#action4'>
                <i class='fas fa-sign-out-alt mx-2'>Se déconnecter</i>
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
