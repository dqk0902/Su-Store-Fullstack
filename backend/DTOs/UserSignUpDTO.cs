using System.ComponentModel.DataAnnotations;
namespace Ecommerce.DTOs;

public class UserSignUpDTO
{
    public string Name { get; set; } = null!;

    [EmailAddress]
    public string Email { get; set; } = null!;
    public string Password { get; set; } = null!;
}