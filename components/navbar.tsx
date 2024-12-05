'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useUser } from '../app/context/usuarioContexto'; // Importa o contexto

const NavbarComponent = () => {
  const { userEmail } = useUser(); // Obtém o email do contexto
  const [isClient, setIsClient] = useState(false); // Estado para verificar se está no cliente
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    setIsClient(true); // Define isClient como true após a montagem
    setLoading(false); // Define loading como false após a montagem
  }, []);

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
            {loading ? ( // Exibe um placeholder enquanto carrega
              <Nav.Link className="text-white">Login</Nav.Link>
            ) : null}
            {!userEmail && isClient ? ( // Renderiza Login apenas se não estiver logado e estiver no cliente
              <Nav.Link href="/login" className="text-white">Login</Nav.Link>
            ) : null}
            {userEmail && isClient ? ( // Renderiza Usuario apenas se estiver logado e estiver no cliente
              <Nav.Link href="/usuario" className="text-white">Usuario</Nav.Link>
            ) : null}
            <Nav.Link href="/info" className="text-white">Info</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;