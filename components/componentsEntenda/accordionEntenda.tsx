'use client'
import React, { useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';

function AccordionEntenda(){
    

    const selecoesTotais = 12;

    const [secoesAbertas, setSecoesAbertas] = useState([]);
    
    const controlaSecao = (eventKey) => {
        setSecoesAbertas((jaAberta) => {
          // Só adiciona a seção se ela ainda não tiver sido aberta
          if (!jaAberta.includes(eventKey)) {
            return [...jaAberta, eventKey];
          }
          return jaAberta; // Se já foi aberta, não faz nada
        });
      };

    const progresso = (secoesAbertas.length/selecoesTotais)*100;
    
    return(
        <Container>
            <Accordion defaultActiveKey={['0']} className="py-5">
                <Accordion.Item eventKey="1">
                  <Accordion.Header onClick={()=>controlaSecao('0')}><b>Criptomoedas, o que são?</b></Accordion.Header>
                  <Accordion.Body>
                  Para conseguirmos trabalhar com criptomoedas, primeiramente precisamos entender <span className="text-warning"><b>o que elas são</b></span>.
                  Criptomoedas são uma forma de dinhero virtual, ou seja, não palpável, que funcionam como 
                  qualquer outra moeda, porém a diferença é que não são emitidas e controladas por 
                  governos e são altamente criptografadas. Elas são usadas como uma forma de 
                  pagamento de pessoa-a-pessoa (peer-to-peer) através de exchanges e carteiras digitais.

                  <Accordion defaultActiveKey={['0']} className="py-2">
                    <Container /*className="bg-dark rounded-start"*/>
                        <Accordion.Header className="border" onClick={()=>controlaSecao('1')}>
                            Como são criadas?
                        </Accordion.Header>
                    </Container>
                        <Accordion.Body>
                        As criptomoedas são criadas na blockchain através de um processo que chamamos de 
                        "mineração" . O processo de mineração se trata de uma série de cálculos e 
                        processos complexos que exigem máquinas dedicadas que custam uma quantidade 
                        absurda de dinheiro e energia para funcionarem. Estes processos feitos são 
                        nescessários para validarem a existência da criptomoeda criada dentro da blockchain.
                        </Accordion.Body>
                    </Accordion>

                    <Accordion defaultActiveKey={['0']} className="py-2">
                    <Container /*className="bg-dark rounded-start"*/>
                        <Accordion.Header className="border" onClick={()=>controlaSecao('2')}>
                            O que é a blockchain?
                        </Accordion.Header>
                    </Container>
                        <Accordion.Body>
                            Uma blockchain é como um livro-razão digital, que registra transações e outros dados
                             de forma segura, transparente e descentralizada (em mais de um computador). 
                             Como um grande livro público, onde todas as pessoas podem ver as transações que
                              aconteceram, mas ninguém pode apagar ou alterar as informações depois de registradas.
                              Isso acontece porque edições dentro destes dados precisam ser aprovadas em todos os
                              computadores que pertencem a rede.
                        </Accordion.Body>
                    </Accordion>

                  </Accordion.Body>
                </Accordion.Item>
            
                <Accordion.Item eventKey="2">
                  <Accordion.Header onClick={()=>controlaSecao('3')}><b>Exchanges ou corretoras</b></Accordion.Header>
                  <Accordion.Body>
                  Agora que entendemos o que são criptomoedas, vamos seguir para as corretoras 
                  de criptomoedas, ou como são normalmente referidas, as "Exchanges": corretoras 
                  de criptomoedas , ou "Exchanges". As corretoras de criptomoedas, normalmente 
                  chamadas de "Exchanges", são a principal forma de se adquirir criptomoedas. 
                  Normalmente, para que seja possível fazer a compra de critpomoedas através 
                  delas, é nescessário que o usuário forneça informações como endereço, CEP, 
                  e coisas do gênereo para identificação do usuário por motivos legais e de 
                  segurança da empresa, porém depende da empresa/exchange.

                  <Accordion defaultActiveKey={['0']} className="py-2 ">
                        <Accordion.Header className="border" onClick={()=>controlaSecao('4')}>
                            Como funcionam exchanges?
                        </Accordion.Header>
                        <Accordion.Body>
                        Conforme mencionado previamente, são o meio que a maioria de investidores 
                        usam para comprar moedas. Após a compra ser feita e registrada, a moeda comprada 
                        vai para a carteira digital do comprador As exchanges não são controladas por 
                        órgãos governamentais como o Banco Central, mas são reconhecidas como empresas 
                        legais e levam a segurança de seu serviço seriamente, certas exchanges, como por 
                        exemplo a Binance pedem informações de indentidade, informações pessoais, 
                        reconhecimento facial e a verificação das contas é feita manualmente. 
                        Ao contrário de corretoras de valores, as exchanges custumam funcionar constantemente.
                        </Accordion.Body>
                    </Accordion>

                    <Accordion defaultActiveKey={['0']} className="py-2 ">
                        <Accordion.Header className="border" onClick={()=>controlaSecao('5')}>
                            Como funciona a compra e venda dentro de exchanges?
                        </Accordion.Header>
                        <Accordion.Body>
                        Conforme mencionado previamente, são o meio que a maioria de investidores 
                        usam para comprar moedas. Após a compra ser feita e registrada, a moeda 
                        comprada vai para a carteira digital desejada do comprador. As exchanges não são 
                        controladas por órgãos governamentais como o Banco Central, mas são reconhecidas 
                        como empresas legais e levam a segurança de seu serviço seriamente, certas exchanges, 
                        como por exemplo a Binance pedem informações de indentidade, informações pessoais, 
                        reconhecimento facial e a verificação das contas é feita manualmente. 
                        Ao contrário de corretoras de valores, as exchanges custumam funcionar constantemente.
                        </Accordion.Body>
                    </Accordion>

                    <Accordion defaultActiveKey={['0']} className="py-2 ">
                        <Accordion.Header className="border" onClick={()=>controlaSecao('6')}>
                            Outras formas de aquisição:
                        </Accordion.Header>
                        <Accordion.Body>
                        As outras formas de aquisição convencional de criptomoedas são através da troca direta 
                        de criptomoedas entre duas pessoas e, conforme mencionado na explicação de 
                        criptomoedas, a mineração delas.
                        </Accordion.Body>
                    </Accordion>

                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header onClick={()=>controlaSecao('7')}><b>Estratégias de investimento</b></Accordion.Header>
                  <Accordion.Body>
                  Existem duas formas de se obter rendimentos com criptomoedas, 
                  o rendimento passivo e o rendimento ativo.

                    
                  <Accordion defaultActiveKey={['0']} className="py-2 ">
                        <Accordion.Header className="border">
                            Rendimento passivo:
                        </Accordion.Header>
                        <Accordion.Body>
                        Os retornos passivos com criptomoedas são mais difíceis e arriscados,
                         os principais são: a mineração, que foi previamente analisada e 
                         explicada, o staking, o lending (inglês para empréstimo) e liquidity pools 
                         (piscinas de liquidez).
                        </Accordion.Body>
                    </Accordion>


                    
                    <Accordion defaultActiveKey={['0']} className="py-2 ">
                        <Accordion.Header className="border" onClick={()=>controlaSecao('8')}>
                            Staking:
                        </Accordion.Header>
                        <Accordion.Body>
                        O staking se trata de usar os tokens das criptomoedas que você possui 
                        para validar as redes de blockchain da criptomoeda. Este processo tem 
                        como suas vantagens o seu baixo custo, um nível de segurança maior, 
                        pois cada parte envolvida tem em seu interesse manter o sistema 
                        funcionando e a integridade da rede alta, ajuda na efetividade das 
                        blockchains, pois as que são validadas são mais rápidas e tem a tendência 
                        de escalar mais rapidamente, e não requerir conhecimento de negociação de 
                        preços. Porém este processo também apresenta lados negativos: Aqueles 
                        que possuem uma quantidade grande de tokens podem ter mais controle sobre a 
                        rede, causando uma centralização, os preços continuam voláteis, portanto 
                        ainda é possível perder dinheiro, e por fim, algumas moedas requerem que os 
                        tokens fiquem bloqueados durante a duração do processo.
                        </Accordion.Body>
                    </Accordion>

                    
                    <Accordion defaultActiveKey={['0']} className="py-2 ">
                        <Accordion.Header className="border" onClick={()=>controlaSecao('9')}>
                           Lending:
                        </Accordion.Header>
                        <Accordion.Body>
                        O processo de Lending se trata de um empréstimo para outra entidade com 
                        o objetivo de receber juros que são negociados entre os envolvidos ou 
                        através pela própria plataforma. Este tipo de investimento é disponível 
                        na maioria das plataformas de bolsas que oferecem negociação de margem. 
                        Estes empréstimos por natureza são arriscados, pois você ainda está 
                        emprestando seus ativos para outro indivíduo, porém é uma estratégia 
                        boa para investidores a longo prazo que procuram aumentar a carteira 
                        com pouco esforço.
                        </Accordion.Body>
                    </Accordion>

                    
                    <Accordion defaultActiveKey={['0']} className="py-2 ">
                        <Accordion.Header className="border" onClick={()=>controlaSecao('10')}>
                            Liquidity pools:
                        </Accordion.Header>
                        <Accordion.Body>
                        É o processo em que o investidor deixa seus tokens trancados em troca 
                        de recompensas fornecidas por exchanges. Este processo é fundamental 
                        para a funcionalidade do mercado e faz com que não haja uma falta de 
                        liquidez, quanto mais "pools" mais fácil a negociação e flexibilidade 
                        no mercado.
                        </Accordion.Body>
                    </Accordion>

                    
                    <Accordion defaultActiveKey={['0']} className="py-2 ">
                        <Accordion.Header className="border" onClick={()=>controlaSecao('11')}>
                            Rendimento ativo:
                        </Accordion.Header>
                        <Accordion.Body>
                        O meio de rendimento ativo de criptomoedas mais comum se trata da compra 
                        e venda das mesmas usando exchanges ou mesmo de um indivíduo para o outro.
                        Como é uma forma mais envolvida de investimento, torna-se mais complicada
                        e talvez até cansativa, porém geralmente é mais rápido.
                        </Accordion.Body>
                    </Accordion>





                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>





            <ProgressBar className="text-center" animated now={progresso} label={`${Math.round(progresso)}%`} />
        </Container>
     
    

        

    )

}

export default AccordionEntenda;