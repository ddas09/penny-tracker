using System.ComponentModel.DataAnnotations;

namespace PennyTracker.Backend.Enums
{
    public enum TransactionCategory
    {
        // Income Categories
        [Display(Name = "Salary")]
        Salary,

        [Display(Name = "Bonus")]
        Bonus,

        [Display(Name = "Investments")]
        Investments,

        [Display(Name = "Freelance Income")]
        Freelance,

        [Display(Name = "Gifts")]
        Gift,

        [Display(Name = "Refunds")]
        Refund,

        // Expense Categories
        [Display(Name = "Food & Groceries")]
        Food,

        [Display(Name = "Monthly Rent")]
        Rent,

        [Display(Name = "Movies & Entertainment")]
        Entertainment,

        [Display(Name = "Utilities (Electricity, Water, etc.)")]
        Utilities,

        [Display(Name = "Transportation & Travel")]
        Transportation,

        [Display(Name = "Healthcare & Medical")]
        Healthcare,

        [Display(Name = "Education & Learning")]
        Education,

        // Others / Common
        [Display(Name = "Miscellaneous")]
        Miscellaneous
    }
}
