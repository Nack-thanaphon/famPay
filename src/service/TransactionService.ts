// src/services/TransactionService.ts
import { getTransactions } from "./mockData";
import { Transaction } from "../interface/Transaction";

export const fetchChartData = async () => {
  const transactions = await getTransactions();
  const chartData = transactions.reduce((acc, transaction) => {
    const date = transaction.datetime.split("T")[0]; // Just the date, no time
    if (!acc[date]) {
      acc[date] = { date, Expense: 0, Income: 0 };
    }
    acc[date][transaction.type] += transaction.amount;
    return acc;
  }, {});

  return Object.values(chartData); // Convert to array
};
