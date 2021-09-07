// Librairies
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';

// Components
import Message from '../../components/Message/Message';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/carActions';

const Cartscreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  // Redux
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  // lifecycles
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  // Functions
  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
    toast.success("😃 L'article a été suprimé du panier", {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const checkOutHandler = () => {
    console.log('check');
    history.push('/login?redirect=shipping');
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Panier</h1>
        {cartItems.length === 0 ? (
          <Message>
            Votre panier est vide <Link to='/'>Retour</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <LinkContainer to={`/product/${item.product}`}>
                      <>{item.name}</>
                    </LinkContainer>
                  </Col>
                  <Col sm={6} md={2}>
                    {item.price}€
                  </Col>
                  <Col md={3} lg={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={e =>
                        dispatch(addToCart(item.product, Number(e.target.value)))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map(i => {
                        return (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Sous-total : ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                articles)
              </h2>
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}{' '}
              €
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block rounded'
                disabled={cartItems.length === 0}
                onClick={checkOutHandler}
              >
                Accèder au paiement
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default Cartscreen;
