using System.ComponentModel.DataAnnotations;
namespace Ecommerce.DTOs;

using Ecommerce.Models;

using System.Collections.Generic;


public class CategoryDTO : BaseDTO<Category>
{
    [MinLength(5, ErrorMessage = "Name is too short, min: 5 characters")]
    public string Name { get; set; } = string.Empty;
    public string Image { get; set; } = string.Empty;
    public override void UpdateModel(Category model)
    {
        model.Name = Name;
        model.Image = Image;
    }
}