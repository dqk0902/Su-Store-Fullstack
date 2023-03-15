using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
namespace Ecommerce.Models;

public class Category : BaseModel
{
    [MaxLength(256)]
    public string Name { get; set; } = string.Empty;
    public string? Image { get; set; }

    [NotMapped]
    [JsonIgnore]
    public ICollection<Product> Products { get; set; } = null!;

}