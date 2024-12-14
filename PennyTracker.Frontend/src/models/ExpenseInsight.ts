export interface ExpenseInsight {
    totalExpenses: number;
    categoryWiseExpenses: Record<string, number>;
    monthlyTrend: Record<string, number>;
}