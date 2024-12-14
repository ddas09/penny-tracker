import { TransactionCategory } from "./TransactionCategory";

export interface Transaction {
    date: string;
    description?: string;
    amount: number;
    category: TransactionCategory;
}