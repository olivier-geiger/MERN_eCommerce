// Librairies
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

// Components
import Rating from '../Rating/Rating';

const Product = ({ product }) => {
  return (
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
