// Librairies
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import Rating from '../Rating/Rating';

const Product = ({ product }) => {
  return (
    // <>
    //   <Col key={product.name} md={3} xs={4} className='m-5 card p-3'>
    //     <NavLink to={`/product/${product._id}`} className='m-1 text-dark'>
    //       <img src={product.image} alt={product.name} className='img-fluid' />
    //       <h1>{product.name}</h1>
    //       <Rating value={product.rating} />
    //       <h2>Prix : {product.price} €</h2>
    //     </NavLink>
    //   </Col>
    //</>
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Card.Text as='div'>
          <strong>{product.name}</strong>
        </Card.Text>

        <Card.Text as='div'>
          <div className='my-3'>
            <Rating value={product.rating} text={`${product.numReviews} vues`} />
          </div>
        </Card.Text>

        <Card.Text as='h3'>{product.price}€</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
