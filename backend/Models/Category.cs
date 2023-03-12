using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Ecommerce.Models;

public class Category : BaseModel
{
    [MaxLength(256)]
    public string Name { get; set; } = string.Empty;
    public string? Image { get; set; }

    [NotMapped]
    public ICollection<Product> Products { get; set; } = null!;

}