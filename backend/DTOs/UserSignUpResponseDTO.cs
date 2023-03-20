namespace Ecommerce.DTOs;

using Ecommerce.Models;
using Microsoft.AspNetCore.Identity;
public class UserSignUpResponseDTO
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string UserName { get; set; } = null!;
    public string Email { get; set; } = null!;
    public static UserSignUpResponseDTO FromUser(User user)
    {
        return new UserSignUpResponseDTO
        {
            Id = user.Id,
            Name = user.Name,
            UserName = user.UserName,
            Email = user.Email,
        };
    }
}

