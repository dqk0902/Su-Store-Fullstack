using System.ComponentModel.DataAnnotations.Schema;
namespace Ecommerce.Models;

public class Order : BaseModel
{
    [NotMapped]
    public User? User { get; set; } = null!;
    public int UserId { get; set; }
    public decimal TotalPrice { get; set; }
    public OrderStatus Status { get; set; }
    [NotMapped]
    public ICollection<Product> Products { get; set; } = null!;
    public enum OrderStatus
    {
        Pending,
        Done,
        Canceled,
    }
}