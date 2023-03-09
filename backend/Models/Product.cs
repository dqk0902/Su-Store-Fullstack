using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Ecommerce.Models;

public class Product : BaseModel
{
    [MaxLength(256)]
    public string Title { get; set; } = string.Empty;
    public int Price { get; set; }
    public string? Description { get; set; }
    public string? Image { get; set; }

}