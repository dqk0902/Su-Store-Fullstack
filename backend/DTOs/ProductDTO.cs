using System.ComponentModel.DataAnnotations;
namespace Ecommerce.DTOs;

using Ecommerce.Models;

public class ProductDTO : BaseDTO<Product>
{
    public string Title { get; set; } = string.Empty;
    public int Price { get; set; }
    public string? Description { get; set; }
    public string? Image { get; set; }
    public int CategoryId { get; set; }
    public override void UpdateModel(Product model)
    {
        model.Title = Title;
        model.Price = Price;
        model.Description = Description;
        model.Image = Image;
        model.CategoryId = CategoryId;
    }
}