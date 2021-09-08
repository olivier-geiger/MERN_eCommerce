// Librairies
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// Redux
import { logout } from '../../actions/userActions';

const Header = () => {
  // Redux
  const dispatch = useDispatch();
  const userlogin = useSelector(state => state.userLogin);
  const { userInfo } = userlogin;

  // Functions
  const logoutHandler = () => {
    console.log('logout');
    dispatch(logout());
    toast.success(` 😃  Merci de votre visite ${userInfo.name}! `, {
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
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='title-site title'>
              {' '}
              Easy Shop <i className='fab fa-shopify yellow'></i>{' '}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end mx-2'>
            <Nav className='text-right'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'>
                    <span>Panier</span>
                  </i>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} className='login' id='username'>
                  <LinkContainer to='/profil'>
                    <NavDropdown.Item>Votre compte</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Se déconnecter
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i>
                    <span>Se connecter</span>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
