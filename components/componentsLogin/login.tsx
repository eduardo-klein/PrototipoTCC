"use client";

import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import Link from 'next/link'; // Importa o componente Link

interface StyledLoginProps {
  onLogin: (email: string) => void; // Define a função onLogin como uma prop
}

const StyledLogin: React.FC<StyledLoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Login attempted with:', { email, password });

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Login bem-sucedido:', email);
        onLogin(email); // Chama a função onLogin passando o email do usuário
      } else {
        setErrorMessage(data.message || 'Credenciais inválidas');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Houve um erro ao tentar fazer login. Tente novamente.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card style={{ width: '400px' }} className="p-4">
        <h2 className="text-center mb-4">Login</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Seu email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Sua senha:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mb-2">
            Login
          </Button>
          {/* Botão de Cadastro usando Link */}
          <Link href="/cadastro" passHref>
            <Button variant="secondary" className='w-100'>
              Cadastro
            </Button>
          </Link>
        </Form>
      </Card>
    </Container>
  );
};

export default StyledLogin;