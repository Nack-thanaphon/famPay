import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchChartData } from '../service/TransactionService';
import { red, green } from '@mui/material/colors';

const TransactionsChart: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const chartData = await fetchChartData();
      setData(chartData);
    };

    loadData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Expense" stroke={red[500]} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Income" stroke={green[500]} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TransactionsChart;