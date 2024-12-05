'use client';

import React, { useState, useEffect } from 'react';
import { Accordion, Container } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useUser } from '../../app/context/usuarioContexto'; // Importa o contexto

const AccordionEntenda: React.FC = () => {
  const { userEmail } = useUser(); // Obtém o email do contexto
  const selecoesTotais = 12;
  const [secoesAbertas, setSecoesAbertas] = useState<string[]>([]);

  console.log('Componente AccordionEntenda foi montado'); // Log para verificar se o componente foi montado
  console.log('userEmail no AccordionEntenda:', userEmail); // Log para verificar se userEmail está definido

  // Carregar o progresso inicial com base no login
  useEffect(() => {
    if (userEmail) {
      fetch(`/api/progresso?email=${userEmail}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('Dados de progresso recebidos:', data); // Log dos dados recebidos
          if (data.progresso) {
            setSecoesAbertas(data.progresso);
          }
        })
        .catch((error) => console.error('Erro ao carregar progresso:', error));
    } else {
      console.log('Nenhum usuário logado.'); // Log quando não há usuário logado
    }
  }, [userEmail]);

  // Função para controlar a abertura das seções
  const controlaSecao = (eventKey: string) => {
    setSecoesAbertas((jaAberta) => {
      if (!jaAberta.includes(eventKey)) {
        const novasSecoesAbertas = [...jaAberta, eventKey];
        if (userEmail) {
          enviarProgressoParaBackend(novasSecoesAbertas);
        }
        return novasSecoesAbertas;
      }
      return jaAberta;
    });
  };

  // Função para enviar o progresso para o backend
  const enviarProgressoParaBackend = async (progressoAtualizado: string[]) => {
    try {
      await fetch('/api/progresso', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, progresso: progressoAtualizado }), // Corrigido para usar userEmail
      });
    } catch (error) {
      console.error('Erro ao enviar progresso:', error);
    }
  };


  const progresso = (secoesAbertas.length / selecoesTotais) * 100;

  return (
    <Container>
      <Accordion defaultActiveKey={['0']} className="py-5">
        <Accordion.Item eventKey="1">
          <Accordion.Header onClick={() => controlaSecao('1')}>
            <b>Criptomoedas, o que são?</b>
          </Accordion.Header>
          <Accordion.Body>
            Para conseguirmos trabalhar com criptomoedas, primeiramente precisamos entender <span className="text-warning"><b>o que elas são</b></span>.
            Criptomoedas são uma forma de dinheiro virtual, ou seja, não palpável, que funcionam como 
            qualquer outra moeda, porém a diferença é que não são emitidas e controladas por 
            governos e são altamente criptografadas. Elas são usadas como uma forma de 
            pagamento de pessoa-a-pessoa (peer-to-peer) através de exchanges e carteiras digitais.

            <Accordion className="py-2">
              <Accordion.Header onClick={() => controlaSecao('2')}>
                Como são criadas?
              </Accordion.Header>
              <Accordion.Body>
                As criptomoedas são criadas na blockchain através de um processo que chamamos de 
                "mineração". O processo de mineração se trata de uma série de cálculos e 
                processos complexos que exigem máquinas dedicadas que custam uma quantidade 
                absurda de dinheiro e energia para funcionarem. Estes processos são 
                necessários para validarem a existência da criptomoeda criada dentro da blockchain.
              </Accordion.Body>
            </Accordion>

            <Accordion className="py-2">
              <Accordion.Header onClick={() => controlaSecao('3')}>
                O que é a blockchain?
              </Accordion.Header>
              <Accordion.Body>
                Uma blockchain é como um livro-razão digital, que registra transações e outros dados
                de forma segura, transparente e descentralizada (em mais de um computador). 
                Como um grande livro público, onde todas as pessoas podem ver as transações que
                aconteceram, mas ninguém pode apagar ou alterar as informações depois de registradas.
                Isso acontece porque edições dentro destes dados precisam ser aprovadas em todos os
                computadores que pertencem à rede.
              </Accordion.Body>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header onClick={() => controlaSecao('4')}>
            <b>Exchanges ou corretoras</b>
          </Accordion.Header>
          <Accordion.Body>
            Agora que entendemos o que são criptomoedas, vamos seguir para as corretoras 
            de criptomoedas, ou como são normalmente referidas, as "Exchanges".
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header onClick={() => controlaSecao('5')}>
            <b>Estratégias de investimento</b>
          </Accordion.Header>
          <Accordion.Body>
            Existem duas formas de se obter rendimentos com criptomoedas, 
            o rendimento passivo e o rendimento ativo.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <ProgressBar className="text-center" animated now={progresso} label={`${Math.round(progresso)}%`} />
    </Container>
  );
};

export default AccordionEntenda;