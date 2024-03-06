// src/types/Transaction.ts
export interface Transaction {
    id: string;
    datetime: string;
    type: 'Expense' | 'Income';
    amount: number;
    fee: number;
    participant: string;
    category: string;
  }
  