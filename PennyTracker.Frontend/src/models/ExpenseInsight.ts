import { TransactionCategory } from "../enums/TransactionCategory";
import { Transaction } from "./Transaction";

export interface ExpenseInsight {
    totalExpenses: number;
    totalIncomes: number;
    transactions: Transaction[];
    categoryWiseExpenses: Record<TransactionCategory, number>;
    categoryWiseIncomes: Record<TransactionCategory, number>;
    monthlyExpenses: Record<string, number>;
    monthlyIncomes: Record<string, number>;
}