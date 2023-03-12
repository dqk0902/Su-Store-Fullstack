using System.ComponentModel.DataAnnotations;
namespace Ecommerce.DTOs;

public class UserSignInDTO
{
    [EmailAddress]
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
}
