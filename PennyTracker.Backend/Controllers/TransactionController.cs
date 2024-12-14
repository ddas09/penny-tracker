using Microsoft.AspNetCore.Mvc;
using PennyTracker.Backend.Services;

namespace PennyTracker.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController(TransactionService transactionService) : ControllerBase
    {
        private readonly TransactionService _transactionService = transactionService;

        [HttpPost("upload")]
        public IActionResult UploadCSVAndGetInsights(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("Invalid file.");

            try
            {
                var insights = _transactionService.ProcessCSVAndGetInsights(file);
                return Ok(insights);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
