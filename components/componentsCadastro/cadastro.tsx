"use client";

import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      alert('Senhas não coincidem');
      return;
    }
  
    try {
      const response = await fetch('/api/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        // Exibe a mensagem de erro retornada pelo backend
        console.error('Erro no cadastro:', data.message);
        alert(data.message || 'Erro ao cadastrar');
        return;
      }
  
      if (data.success) {
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Erro inesperado:', error);
      alert('Houve um erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card style={{ width: '400px' }} className="p-4">
        <h1 className="text-center mb-4">Cadastro</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Digite seu email" 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Digite sua senha" 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirmar Senha</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Confirme sua senha" 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="py-1 w-100">
            Cadastrar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;