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

            // Separate transactions into income and expenses
            var incomeTransactions = transactions.Where(t => t.Amount > 0).ToList();
            var expenseTransactions = transactions.Where(t => t.Amount < 0).ToList();

            // Calculate total expenses
            var totalExpenses = expenseTransactions.Sum(t => Math.Abs(t.Amount));

            // Calculate total incomes
            var totalIncomes = incomeTransactions.Sum(t => t.Amount);

            // Group and calculate category-wise expenses (using ExpenseCategory enum)
            var categoryWiseExpenses = expenseTransactions
                .GroupBy(t => t.Category)
                .ToDictionary(
                    g => g.Key,
                    g => g.Sum(t => Math.Abs(t.Amount))
                );

            // Group and calculate category-wise incomes (using IncomeCategory enum)
            var categoryWiseIncomes = incomeTransactions
                .GroupBy(t => t.Category)
                .ToDictionary(
                    g => g.Key,
                    g => g.Sum(t => t.Amount)
                );

            // Group and calculate monthly expenses
            var monthlyExpenses = expenseTransactions
                .GroupBy(t => (Month)t.Date.Month)
                .OrderBy(g => g.Key)
                .ToDictionary(
                    g => g.Key,
                    g => g.Sum(t => Math.Abs(t.Amount))
                );

            // Group and calculate monthly incomes
            var monthlyIncomes = incomeTransactions
                .GroupBy(t => (Month)t.Date.Month)
                .OrderBy(g => g.Key)
                .ToDictionary(
                    g => g.Key,
                    g => g.Sum(t => t.Amount)
                );

            // Return the aggregated insights
            return new ExpenseInsight
            {
                Transactions = transactions,
                TotalExpenses = totalExpenses,
                TotalIncomes = totalIncomes,
                CategoryWiseExpenses = categoryWiseExpenses,
                CategoryWiseIncomes = categoryWiseIncomes,
                MonthlyExpenses = monthlyExpenses,
                MonthlyIncomes = monthlyIncomes
            };
        }
    }
}
