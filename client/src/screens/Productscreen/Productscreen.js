// Librairie
import React from 'react';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from '../../components/Rating/Rating';
import Message from '../../components/Message/Message';
// import Loader from '../../components/Loader/Loader';
import Meta from '../../components/Meta/Meta';
import { Link } from 'react-router-dom';

// import
import products from '../../products';

const Productscreen = ({ match }) => {
  const productID = match.params.id;

  const product = products.find(product => product._id === productID);

  return (
    // <>
    //   <Row>
    //     <Col md={6}>
    //       <Card className='m-2'>
    //         <Card.Text className='m-3'>{product.name}</Card.Text>
    //         <Card.Img
    //           src={product.image}
    //           alt={product.name}
    //           className='img-fluid big-img'
    //         />
    //         <Card.Text className='m-3'>{product.description}</Card.Text>
    //       </Card>
    //     </Col>

    //     <Col md={6}>
    //       <Card.Text className='my-3 mx-2'>
    //         Evaluations : <Rating value={product.rating} />
    //       </Card.Text>
    //       <hr />
    //       <Card.Text className='my-3 mx-2'>Prix : {product.price} €</Card.Text>
    //       <hr />
    //       <Card.Text className='my-3 mx-2'>
    //         Quantité :
    //         <select className='mx-2'>
    //           {[...Array(product.countInStock).keys()].map((el, i) => {
    //             return <option value={i + 1}>{i + 1}</option>;
    //           })}
    //         </select>
    //       </Card.Text>
    //       <hr />
    //       <Button variant='warning'>Ajouter au panier</Button>
    //     </Col>
    //   </Row>
    // </>
    <>
      {/* <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link> */}
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : ( */}
      <>
        <Meta title={product.name} />
        <Row>
          <Col md={6} lg={4}>
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
                        ? 'En Stock'
                        : 'En cours de réapprovisionnement'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantité</Col>
                      <Col>
                        <Form.Control as='select'>
                          {[...Array(product.countInStock).keys()].map((el, i) => {
                            return <option value={i + 1}>{i + 1}</option>;
                          })}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Ajouter au panier
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row></Row>
      </>
    </>
  );
};

export default Productscreen;
