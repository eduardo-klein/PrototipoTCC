'use client'

import React from "react";
import Accordion from "react-bootstrap/Accordion";


const AccordionHome=()=>{
    return(
        
              <Accordion defaultActiveKey={['0']} className="">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Porque foi criado este site?</Accordion.Header>
                  <Accordion.Body>
                    O SIC foi criado quando foi percebido que havia uma oportunidade de ajudar 
                    pessoas que tinham curiosidade sobre este tópico, porém não tinham tempo ou o 
                    conhecimento necessário para entender e estudar o tópico.
                  </Accordion.Body>
                </Accordion.Item>
            
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Este site recomenda investimentos?</Accordion.Header>
                  <Accordion.Body>
                    Não, o objetivo deste projeto é explicar como funcionam criptomoedas, 
                    como trabalhar com elas, e os benefícios que pode-se conseguir usando elas.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>É necessário conhecimento externo para entender o site?</Accordion.Header>
                  <Accordion.Body>
                    Não é necessário conhecimento externo sobre este assunto, 
                    o site foi criado para suprir as informações básicas necessárias
                     para começar a entender este assunto.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          }


export default AccordionHome;