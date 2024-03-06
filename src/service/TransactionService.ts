// src/services/TransactionService.ts
import { getTransactions } from "./mockData";

interface TransactionData {
  datetime: string;
  amount: number;
  owner: string;
}

interface ChartData {
  date: string;
  Nack: number;
  Nuy: number;
}

export const fetchChartData = async (): Promise<ChartData[]> => {
  const transactions = await getTransactions();

  const transformData = (transactions: TransactionData[]): ChartData[] => {
    // Aggregate transactions by date and split amounts by owner
    const aggregatedData: { [date: string]: ChartData } = {};

    transactions.forEach(({ datetime, amount, owner }) => {
      const date = datetime.split("T")[0]; // Extract just the date part

      if (!aggregatedData[date]) {
        aggregatedData[date] = { date, Nack: 0, Nuy: 0 };
      }

      if (owner === "Nack") {
        aggregatedData[date].Nack += amount;
      } else if (owner === "Nuy") {
        aggregatedData[date].Nuy += amount;
      }
    });

    // Convert the aggregated data back into an array
    const chartData: ChartData[] = Object.values(aggregatedData);

    // Sort the data by date to ensure correct chart rendering
    chartData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return chartData;
  };

  return transformData(transactions);
};