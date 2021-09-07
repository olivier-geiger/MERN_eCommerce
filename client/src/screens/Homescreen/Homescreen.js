// Librairies
import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Product from '../../components/Product/Product';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import Meta from '../../components/Meta/Meta';

// Redux
import { listPoducts } from '../../actions/productActions';

const Homescreen = () => {
  // Redux
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  // Lifecycles
  useEffect(() => {
    dispatch(listPoducts());
  }, [dispatch]);

  return (
    <>
      <Meta />
      <h1>Dernier produits</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default Homescreen;
