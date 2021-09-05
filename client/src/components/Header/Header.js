import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand>Node e-commerce</Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end mx-2'>
            <Nav className='text-right'>
              <Nav.Link href='/login' exact>
                <i className='fas fa-user'></i> Se connecter
              </Nav.Link>
              <Nav.Link href='#'>
                <i className='fas fa-shopping-cart'></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
