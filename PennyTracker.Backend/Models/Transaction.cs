using PennyTracker.Backend.Enums;

namespace PennyTracker.Backend.Models
{
    public class Transaction
    {
        public DateTime Date { get; set; }

        public string? Description { get; set; }

        public decimal Amount { get; set; }
        
        public TransactionCategory Category { get; set; }
    }
}
