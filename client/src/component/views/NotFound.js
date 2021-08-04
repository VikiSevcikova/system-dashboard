import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

const NotFound = () => (
  <Container>
      <Row className="justify-content-center text-center row-card">
      <Col>
        <h1>404 - Not Found!</h1>
        <Link className="form-link" to="/">
        Go To Main Page
        </Link>
      </Col>
      </Row>
  
  </Container>
);

export default NotFound;