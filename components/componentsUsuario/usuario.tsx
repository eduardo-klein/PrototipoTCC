'use client';

import React from 'react';
import { Container, Button, Form, Row, Col, Card } from 'react-bootstrap';

function Usuario({ 
  loggedInEmail, 
  onLogout, 
  onEmailChange, 
  onPasswordChange, 
  onResetProgress,
  newEmail,
  setNewEmail,
  newPassword,
  setNewPassword 
}) {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Gerenciamento de Usuário</h1>
      
      {loggedInEmail ? (
        <Card className="p-4">
          <Card.Body>
            <Card.Title>Bem-vindo, <b>{loggedInEmail}</b>!</Card.Title>
            
            <Form>
              {/* Alinhamento do campo de email */}
              <Row className="mb-3 align-items-center">
                <Col xs={8}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Alterar Email</Form.Label>
                    <Form.Control 
                      type="email" 
                      value={newEmail} 
                      onChange={(e) => setNewEmail(e.target.value)} 
                      placeholder="Novo Email" 
                    />
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <Button variant="primary" onClick={onEmailChange} className="w-30" size="sm">
                    Atualizar Email
                  </Button>
                </Col>
              </Row>

              {/* Alinhamento do campo de senha */}
              <Row className="mb-3 align-items-center">
                <Col xs={8}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Alterar Senha</Form.Label>
                    <Form.Control 
                      type="password" 
                      value={newPassword} 
                      onChange={(e) => setNewPassword(e.target.value)} 
                      placeholder="Nova Senha" 
                    />
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <Button variant="primary" onClick={onPasswordChange} className="w-30" size="sm">
                    Atualizar Senha
                  </Button>
                </Col>
              </Row>

              {/* Agrupando os botões de Logout e Zerando Progresso */}
              <Row className="mb-3">
                <Col className="d-flex">
                  <Button variant="danger" onClick={onResetProgress} className="me-2">
                    Zerar Progresso
                  </Button>
                  <Button variant="danger" onClick={onLogout}>
                    Logout
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      ) : (
        <p className="text-center">Nenhum usuário logado.</p>
      )}
    </Container>
  );
}

export default Usuario;