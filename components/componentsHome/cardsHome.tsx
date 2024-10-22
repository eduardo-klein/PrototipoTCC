'use client'
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function GrupoCards() {
    return (
        <Container className='py-5'>
          <Row className="g-3"> 
            <Col xs={12} sm={6} md={4}> 
              <Card className="mb-3 text-center h-100"> 
                <Card.Body>
                  <i className="bi bi-coin" style={{ fontSize: '3vh' }} />
                  <Card.Title className='text-center'>Lucro rápido</Card.Title>
                  <Card.Text>
                    Criptomoedas podem variar rapidamente em um período curto
                    de tempo, logo é possível obter lucro rápido através de formas
                    mais ativas de investimento.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
    
            <Col xs={12} sm={6} md={4}>
              <Card className="mb-3 text-center h-100">
                <Card.Body>
                  <i className="bi bi-cash-coin" style={{ fontSize: '3vh' }} />
                  <Card.Title className=''>Variedade</Card.Title>
                  <Card.Text>
                    Existe uma variedade de estratégias e meios de investimentos com
                    criptomoedas que possam oferecer diferentes formas de retornos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
    
            <Col xs={12} sm={6} md={4}>
              <Card className="mb-3 text-center h-100">
                <Card.Body>
                  <i className="bi bi-shield-lock-fill" style={{ fontSize: '3vh' }} />
                  <Card.Title className=''>Segurança</Card.Title>
                  <Card.Text>
                    Dentre os benefícios que criptomoedas oferecem, se destacam a anonimidade
                    oferecida.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }