using PennyTracker.Backend.Enums;
using System.Text.Json.Serialization;

namespace PennyTracker.Backend.Models
{
    public class Transaction
    {
        public DateTime Date { get; set; }

        public string? Description { get; set; }

        public decimal Amount { get; set; }
        
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public TransactionCategory Category { get; set; }
    }
}
