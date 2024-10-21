'use client'
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

export default function InfoTabela() {
  const [cryptoData, setCryptoData] = useState([]);

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
          quantity: crypto.total_volume, // Ou outros dados relevantes
        }));
        setCryptoData(formattedData);
      })
      .catch((error) => console.error('Erro ao buscar dados de criptomoedas:', error));
  }, []);

  return (
    <div>
      <h2 className='py-3'>Destaques</h2>
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
            <tr key={crypto.id}>
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
  );
}





