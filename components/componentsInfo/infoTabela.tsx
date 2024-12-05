"use client";

import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import LineChartComponent from '../componentsInfo/graficoMoeda';

export default function InfoTabela() {
  const [cryptoData, setCryptoData] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 10,
          page: 1,
          sparkline: false,
        },
      })
      .then((response) => {
        const formattedData = response.data.map((crypto) => ({
          id: crypto.id,
          name: crypto.name,
          icon: crypto.image,
          openPrice: crypto.current_price,
          highPrice: crypto.high_24h,
          lowPrice: crypto.low_24h,
          quantity: crypto.total_volume,
        }));
        setCryptoData(formattedData);
      })
      .catch((error) => console.error('Erro ao buscar dados de criptomoedas:', error));
  }, []);

  const handleRowClick = (crypto) => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${crypto.id}/market_chart?vs_currency=usd&days=30&interval=daily`)
      .then((response) => {
        const prices = response.data.prices.map((price) => price[1]);
        setSelectedCrypto({ ...crypto, prices });
      })
      .catch((error) => console.error('Erro ao buscar dados de preços históricos:', error));
  };

  const handleBackClick = () => {
    setSelectedCrypto(null); // Reseta o estado para mostrar a tabela novamente
  };

  return (
    <div className="container">
      <h2 className='py-3'>Destaques</h2>
      
      {selectedCrypto ? (
        <>
          {/* Botão para voltar à tabela */}
          <Button variant="secondary" onClick={handleBackClick} className="mb-3">
            Voltar para a Tabela
          </Button>

          {/* Componente do gráfico */}
          <LineChartComponent cryptoData={selectedCrypto} />
        </>
      ) : (
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ícone</th>
                <th>Nome</th>
                <th>Preço de Abertura</th>
                <th>Maior Preço</th>
                <th>Menor Preço</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((crypto) => (
                <tr key={crypto.id} onClick={() => handleRowClick(crypto)}>
                  <td>
                    <img src={crypto.icon} alt={crypto.name} width="32" height="32" />
                  </td>
                  <td>{crypto.name}</td>
                  <td>${crypto.openPrice}</td>
                  <td>${crypto.highPrice}</td>
                  <td>${crypto.lowPrice}</td>
                  <td>{crypto.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}