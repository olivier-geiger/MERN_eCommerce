// Librairies
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';

// Redux
// import { filterProducts } from '../../actions/filterActions';

const Filterscreen = ({ history }) => {
  // State
  const [searchkey, setSearchkey] = useState('');
  const [sort, setSort] = useState('popular');
  const [category, setCategory] = useState('all');

  // Redux
  // const dispatch = useDispatch();

  return (
    <Container>
      <Form className='filter'>
        <Row>
          <Col md={4}>
            <Form.Control
              type='text'
              placeholder='Rechercher un produit...'
              className='mr-sm-2 ml-sm-5 border'
              value={searchkey}
              onChange={e => setSearchkey(e.target.value)}
            />
          </Col>

          <Col md={4}>
            <Form.Control
              as='select'
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option>Trié par: Node ecommerce présente</option>
              <option value='popular'>Populaire</option>
              <option value='htl'>Prix: par ordre décroissant</option>
              <option value='lth'>Prix: par ordre croissant</option>
            </Form.Control>
          </Col>

          <Col md={3}>
            <Form.Control
              as='select'
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option>Trié par: catégorie</option>
              <option value='accessories'>accessoires</option>
              <option value='consoles'>consoles</option>
              <option value='games'>vidéos</option>
              <option value='mobiles'>mobiles</option>
              <option value='watches'>montres</option>
              <option value='laptops'>ordinateurs</option>
              <option value='tablets'>tablettes</option>
              <option value='musics'>musique</option>
            </Form.Control>
          </Col>

          <Col md={1}>
            <Button type='submit' variant='outline-success' className='p-2 ml-5'>
              Rechercher
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Filterscreen;
