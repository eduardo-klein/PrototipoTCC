"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const graficoMoeda = ({ cryptoData }) => {
  const data = {
    labels: cryptoData.prices.map((price, index) => `Dia ${index + 1}`),
    datasets: [
      {
        label: cryptoData.name,
        data: cryptoData.prices,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Variação do preço de ${cryptoData.name}`,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className='rounded'>
      <h3 className='text-center'>Variação do preço(dolár) de 1 mês</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default graficoMoeda;