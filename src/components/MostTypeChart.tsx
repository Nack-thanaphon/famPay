import React from 'react';
import { Bar } from 'react-chartjs-2';

const MostTypeChart = ({ data, timeframe }) => {
  // Logic to calculate the total expenses and total received money
  // Assume the logic returns an object with total values for both
  const totalExpenses = data.transactions
    .filter(transaction => transaction.type === 'Expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalReceived = data.transactions
    .filter(transaction => transaction.type === 'Received')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const chartData = {
    labels: ['Expenses', 'Received Money'],
    datasets: [
      {
        label: 'Total',
        data: [totalExpenses, totalReceived],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="p-4">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default MostTypeChart;
