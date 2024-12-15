using PennyTracker.Backend.Enums;

namespace PennyTracker.Backend.Models
{
    public class ExpenseInsight
    {
        public List<Transaction> Transactions { get; set; } = [];

        public decimal TotalExpenses { get; set; }

        public decimal TotalIncomes { get; set; }

        public Dictionary<TransactionCategory, decimal> CategoryWiseExpenses { get; set; } = [];

        public Dictionary<TransactionCategory, decimal> CategoryWiseIncomes { get; set; } = [];

        public Dictionary<Month, decimal> MonthlyExpenses { get; set; } = [];

        public Dictionary<Month, decimal> MonthlyIncomes { get; set; } = [];
    }
}
