import { Row, Nav, NavLink, Col, Container } from "react-bootstrap";
import React from "react";


const footer = () => {
    return (
      <footer className="bg-dark text-white p-3">
        <Row className="d-flex justify-content-between mx-auto">
          <Col xs={6} md={4} className="d-flex align-items-center">
            <p className="text-white py-2 mb-0">SIC®</p>
          </Col>
          <Col xs={6} md={8} className="d-flex justify-content-end">
            <Nav>
              <NavLink href="/" className="text-white mx-3">Home</NavLink>
              <NavLink href="/entenda" className="text-white mx-3">Entenda</NavLink>
              <NavLink href="/login" className="text-white mx-3">Login</NavLink>
              <NavLink href="/info" className="text-white mx-3">Info</NavLink>
              
            </Nav>
          </Col>
        </Row>
      </footer>
    );
  };

export default footer;