using PennyTracker.Backend.Enums;

namespace PennyTracker.Backend.Models
{
    public class ExpenseInsight
    {
        public decimal TotalExpenses { get; set; }

        public Dictionary<TransactionCategory, decimal> CategoryWiseExpenses { get; set; } = [];

        public Dictionary<Month, decimal> MonthlyTrend { get; set; } = [];
    }
}
