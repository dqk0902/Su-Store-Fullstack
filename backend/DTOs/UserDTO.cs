using System.ComponentModel.DataAnnotations;
using Ecommerce.Models;
namespace Ecommerce.DTOs;

public class UserDTO
{
    public int Id { get; set; }
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;
    public string UserName { get; set; } = null!;
    [EmailAddress]
    public string Email { get; set; } = null!;
    public string Role { get; set; } = null!;
    public static UserDTO FromUser(User user)
    {
        return new UserDTO
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            UserName = user.UserName,
            Email = user.Email,
        };
    }
    public static List<UserDTO> FromUsers(IEnumerable<User> users)
    {
        List<UserDTO> userDTOs = new List<UserDTO>();
        foreach (var user in users)
        {
            userDTOs.Add(FromUser(user));
        }
        return userDTOs;
    }
}
