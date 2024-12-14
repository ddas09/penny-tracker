using CsvHelper;
using System.Globalization;
using CsvHelper.Configuration;
using PennyTracker.Backend.Enums;
using PennyTracker.Backend.Models;

namespace PennyTracker.Backend.Services
{
    public class TransactionService
    {
        public ExpenseInsight ProcessCSVAndGetInsights(IFormFile csvFile)
        {
            if (csvFile == null || csvFile.Length == 0)
                throw new ArgumentException("Invalid CSV file.");

            var transactions = new List<Transaction>();

            using (var stream = csvFile.OpenReadStream())
            using (var reader = new StreamReader(stream))
            using (var csv = new CsvReader(reader, new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                HasHeaderRecord = true
            }))
            {
                transactions = csv.GetRecords<Transaction>().ToList();
            }

            var totalExpenses = transactions.Sum(t => t.Amount);

            var categoryWiseExpenses = transactions
                .GroupBy(t => t.Category)
                .ToDictionary(
                    g => g.Key,
                    g => g.Sum(t => t.Amount)
                );

            var monthlyTrend = transactions
            .GroupBy(t => (Month)t.Date.Month)
            .OrderBy(g => g.Key)
            .ToDictionary(
                g => g.Key,
                g => g.Sum(t => t.Amount)
            );

            return new ExpenseInsight
            {
                TotalExpenses = totalExpenses,
                CategoryWiseExpenses = categoryWiseExpenses,
                MonthlyTrend = monthlyTrend
            };
        }
    }
}