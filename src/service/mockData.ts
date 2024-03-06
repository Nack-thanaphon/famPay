// src/services/mockData.ts
import { Transaction } from "../interface/Transaction";

const mockTransactions: Transaction[] = [
  {
    id: "transaction-009",
    datetime: "2024-02-09T10:00:00Z",
    type: "Expense",
    amount: 1000000.0,
    fee: 1.0,
    owner: "Nuy",
    category: "Groceries",
  },
  {
    id: "transaction-010",
    datetime: "2024-02-10T10:00:00Z",
    type: "Expense",
    amount: 10000.0,
    fee: 1.0,
    owner: "Nuy",
    category: "Groceries",
  },
  {
    id: "transaction-011",
    datetime: "2024-02-11T10:00:00Z",
    type: "Expense",
    amount: 100000.0,
    fee: 1.0,
    owner: "Nack",
    category: "Groceries",
  },
  {
    id: "transaction-012",
    datetime: "2024-02-12T10:00:00Z",
    type: "Expense",
    amount: 100.0,
    fee: 1.0,
    owner: "Nack",
    category: "Groceries",
  },
  {
    id: "transaction-013",
    datetime: "2024-02-13T10:00:00Z",
    type: "Expense",
    amount: 100.0,
    fee: 1.0,
    owner: "Nuy",
    category: "Groceries",
  },
  {
    id: "transaction-014",
    datetime: "2024-02-14T10:00:00Z",
    type: "Expense",
    amount: 48900.0,
    fee: 1.0,
    owner: "Nuy",
    category: "Groceries",
  },
  {
    id: "transaction-019",
    datetime: "2024-02-14T10:00:00Z",
    type: "Expense",
    amount: 80000.0,
    fee: 1.0,
    owner: "Nack",
    category: "Groceries",
  },
  {
    id: "transaction-015",
    datetime: "2024-02-15T10:00:00Z",
    type: "Expense",
    amount: 100.0,
    fee: 1.0,
    owner: "Nuy",
    category: "Groceries",
  },
  {
    id: "transaction-016",
    datetime: "2024-02-16T10:00:00Z",
    type: "Expense",
    amount: 100.0,
    fee: 1.0,
    owner: "Nuy",
    category: "Groceries",
  },
  {
    id: "transaction-017",
    datetime: "2024-02-17T10:00:00Z",
    type: "Expense",
    amount: 10000.0,
    fee: 1.0,
    owner: "Nuy",
    category: "Groceries",
  },
];

export const getTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTransactions);
    }, 500);
  });
};
