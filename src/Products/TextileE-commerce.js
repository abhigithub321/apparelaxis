import React from 'react';
import { Container, Row, Col, Card, Button, Carousel, Form } from 'react-bootstrap';
import './CartBanner.css'

const products = [
  {
    id: 1,
    image: './Images/shirt.png',
    name: 'Cotton Shirt',
    price: '$25.99',
    description: 'Comfortable cotton shirt for casual wear.'
  },
  {
    id: 2,
    image: './Images/saree.png',
    name: 'Silk Saree',
    price: '$99.99',
    description: 'Elegant silk saree for special occasions.'
  },
  {
    id: 3,
    image: './Images/pant.png',
    name: 'Linen Pants',
    price: '$45.00',
    description: 'Breathable linen pants for summer days.'
  },
];

const TextileEcommerce = () => {
  return (
    <div id='banner'>
      {/* Header Section */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Images/BrownMinimalistFashionBanner.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Exclusive Textile Collection</h3>
            <p>Discover the finest fabrics and fashion trends.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Product Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          {products.map(product => (
            <Col key={product.id} md={4}>
              <Card className="mb-4">
                <Row noGutters>
                  <Col md={4}>
                    <Card.Img variant="top" src={product.image} />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Card.Text>
                        <strong>{product.price}</strong>
                      </Card.Text>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Filters Section */}
      <Container>
        <h2 className="text-center mb-4">Filter Products</h2>
        <Row>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control as="select">
                <option>Shirts</option>
                <option>Sarees</option>
                <option>Pants</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Price Range</Form.Label>
              <Form.Control as="select">
                <option>Under $50</option>
                <option>$50 - $100</option>
                <option>Above $100</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Button variant="secondary" className="mt-4">
              Apply Filters
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2024 Textile E-Commerce. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default TextileEcommerce;
