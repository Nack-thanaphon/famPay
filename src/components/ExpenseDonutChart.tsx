import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const ExpenseDonutChart = ({ data }) => {
  const chartData = {
    labels: data.categories.expense,
    datasets: [
      {
        data: data.categories.expense.map((category) =>
          data.transactions
            .filter((transaction) => transaction.category === category && transaction.type === 'Expense')
            .reduce((sum, transaction) => sum + transaction.amount, 0)
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED']
      }
    ]
  };

  return (
    <div className="p-4">
      <Doughnut data={chartData} />
    </div>
  );
};

export default ExpenseDonutChart;
