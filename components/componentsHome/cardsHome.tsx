'use client'
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function CardGroup() {
  return (
    <Container className='py-5'>
        <Row>
            <Col>
                <Card style={{ width: '18rem', height: '15rem' }} className="mb-3 text-center">
                    <Card.Body>
                            <i className="bi bi-coin" style={{fontSize:'3vw'}}/>
                        <Card.Title className='text-center'>Lucro rápido</Card.Title>
                        <Container style={{fontSize:14}} className=''>
                            <Card.Text>
                                Criptomoedas podem variar rapidamente em um período curto
                                de tempo, logo é possível obter lucro rápido através de formas
                                mais ativas de investimento
                            </Card.Text>
                        </Container>
                        
                    </Card.Body>
                </Card>
            </Col>
                
            <Col>
                <Card className="mb-3 text-center" style={{ width: '18rem', height: '15rem' }}>
                    <Card.Body>
                    <i className="bi bi-cash-coin" style={{fontSize:'3vw'}}/>
                        <Card.Title className=''>Variedade</Card.Title>
                        <Card.Text className=''>
                        Existe uma variedade de estratégias e meios de investimentos com
                        criptomoedas que possam oferecer diferentes formas de retornos.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="mb-3 text-center" style={{ width: '18rem', height: '15rem' }}>
                    <Card.Body>
                    <i className="bi bi-shield-lock-fill" style={{fontSize:'3vw'}}/>
                        <Card.Title className=''>Segurança</Card.Title>
                        <Card.Text className=''>
                            Dentre os benefícios que criptomoedas oferecem, se destacam a anonimidade
                            oferecida, 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
    
        </Row>
        </Container>   
  );
}