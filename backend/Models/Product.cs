using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
namespace Ecommerce.Models;

public class Product : BaseModel
{
    [MaxLength(256)]
    public string Title { get; set; } = string.Empty;
    public int Price { get; set; }
    public string? Description { get; set; }
    public string? Image { get; set; }
    [NotMapped]
    public Category Category { get; set; } = null!;
    public int CategoryId { get; set; }
    [NotMapped]
    [JsonIgnore]
    public Order Order { get; set; } = null!;
    public int OrderId { get; set; }
}