using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
namespace Ecommerce.Models;

public class Order : BaseModel
{
    [NotMapped]
    [JsonIgnore]
    public User? User { get; set; } = null!;
    public int UserId { get; set; }
    public decimal TotalPrice { get; set; }
    public OrderStatus Status { get; set; }
    [NotMapped]
    [JsonIgnore]
    public ICollection<Product> Products { get; set; } = null!;

    public enum OrderStatus
    {
        Pending,
        Done,
        Canceled,
    }
}