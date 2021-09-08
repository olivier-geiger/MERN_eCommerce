// Librairie
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

// Components
import Rating from '../../components/Rating/Rating';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import Meta from '../../components/Meta/Meta';

// Redux
import { listProductDetails } from '../../actions/productActions';

const Productscreen = ({ history, match }) => {
  // State
  const [show, setShow] = useState(false);
  const [qty, setQty] = useState(1);

  // Redux
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  // Lifecycles
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  // Functions
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?quantity=${qty}`);
    toast.success(` 😃 ${product.name} a été ajouté au panier`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const toggleHandler = e => {
    setShow(!show);
  };

  return (
    <>
      <Meta title={product.name} />
      <Link className='btn btn-light my-3' to='/'>
        <Button variant='dark' className='rounded'>
          Retour
        </Button>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6} lg={4} key={product._id}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={6} lg={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} évaluations`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Prix {product.price} € </ListGroup.Item>
              <ListGroup.Item>Description: {product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={12} lg={4}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Prix:</Col>
                    <Col>
                      <strong>{product.price} €</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0
                        ? `(${product.countInStock}) - En Stock`
                        : 'En cours de réapprovisionnement'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantité</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={e => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map(i => {
                            return (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            );
                          })}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    variant='warning'
                    className='btn-block rounded'
                    type='button'
                    disabled={product.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    Ajouter au panier
                  </Button>
                </ListGroup.Item>

                <Modal.Dialog>
                  <Modal.Header closeButton onClick={e => toggleHandler()}>
                    <Modal.Title>
                      <h3>
                        <i className='fas fa-lock'>Transaction sécurisée</i>
                      </h3>
                    </Modal.Title>
                  </Modal.Header>
                  {show && (
                    <Modal.Body>
                      <p>
                        Nous nous efforçons de protéger votre sécurité et votre vie
                        privée. Notre système de paiement sécurisé chiffre vos données
                        lors de la transmission. Nous ne partageons pas les détails de
                        votre carte de crédit avec les vendeurs tiers, et nous ne vendons
                        pas vos données personnelles à autrui.
                      </p>
                    </Modal.Body>
                  )}
                </Modal.Dialog>

                <ListGroup.Item>
                  <Row>
                    <Col className='text-center'>Laisser une évaluation</Col>
                  </Row>
                </ListGroup.Item>

                <Form.Group controlId='password' className='mt-2'>
                  <Form.Control
                    type='rating'
                    placeholder='Ajouter votre commentaire...'
                  ></Form.Control>
                </Form.Group>

                <hr />
                <p className='content'>Dernier commentaire</p>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Productscreen;
