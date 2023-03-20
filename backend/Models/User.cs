using System.ComponentModel.DataAnnotations;
namespace Ecommerce.Models;

using Microsoft.AspNetCore.Identity;

public class User : IdentityUser<int>
{
    [MaxLength(256)]
    public string Name { get; set; } = null!;

    public ICollection<Order> Orders { get; set; } = null!;
}