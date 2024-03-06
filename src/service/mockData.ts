// src/services/mockData.ts
import { Transaction } from "../interface/Transaction";

const mockTransactions: Transaction[] = [
  {
    id: "transaction-001",
    datetime: "2024-01-01T12:00:00Z",
    type: "Expense",
    amount: 500.0,
    fee: 0.0,
    participant: "Utility Company",
    category: "Utilities",
  },
  {
    id: "transaction-002",
    datetime: "2024-01-02T15:00:00Z",
    type: "Income",
    amount: 1500.0,
    fee: 0.0,
    participant: "Employer LLC",
    category: "Salary",
  },
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `transaction-${i + 3}`.padStart(3, "0"),
    datetime: `2024-01-${(i + 3).toString().padStart(2, "0")}T12:00:00Z`,
    type: i % 2 === 0 ? "Expense" : "Income",
    amount: i % 2 === 0 ? 500.0 : 1500.0,
    fee: 0.0,
    participant: i % 2 === 0 ? "Utility Company" : "Employer LLC",
    category: i % 2 === 0 ? "Utilities" : "Salary",
  }))
];

export const getTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTransactions);
    }, 500);
  });
};
