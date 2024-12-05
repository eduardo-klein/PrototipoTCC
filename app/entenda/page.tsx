"use client";

import React, { useState, useEffect } from 'react';
import AccordionEntenda from '../../components/componentsEntenda/accordionEntenda'; 
import { useUser } from '../context/usuarioContexto'; 
import { Alert, Container } from 'react-bootstrap'; // Importando Alert e Container

export default function Page() {
  const { userEmail } = useUser(); 
  const [isClient, setIsClient] = useState(false); // Estado para verificar se está no cliente

  useEffect(() => {
    setIsClient(true); // Define isClient como true após a montagem
  }, []);

  return (
    <Container className="py-5">
      {isClient ? ( // Renderiza condicionalmente com base em isClient
        userEmail ? (
          <>
            <AccordionEntenda /> 
          </>
        ) : (
          <Alert variant="warning" className="text-center">
            Por favor, faça login para acessar esta página.
          </Alert>
        )
      ) : (
        <Alert variant="info" className="text-center">
          Carregando...
        </Alert> // Mensagem de carregamento
      )}
    </Container>
  );
}