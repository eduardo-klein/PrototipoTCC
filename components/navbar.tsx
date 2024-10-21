'use client';

import React from "react";
import Image from "next/image";
import { Container, Nav, Navbar  } from "react-bootstrap";
<meta name="viewport" content="width=device-width, initial-scale=1" />

const navbar = () =>{
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Image 
            src="/images/logo.png" 
            alt=""
            width={65}
            height={50}
            />
          <Navbar.Brand>SIC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-white">
              <Nav.Link href="/" className="text-white">Home</Nav.Link>
              <Nav.Link href="/entenda" className="text-white">Entenda</Nav.Link>
              <Nav.Link href="/info" className="text-white">Info</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        


    )
}

export default navbar;