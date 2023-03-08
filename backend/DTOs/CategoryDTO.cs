using System.ComponentModel.DataAnnotations;
namespace Ecommerce.DTOs;

using Ecommerce.Models;

using System.Collections.Generic;


public class CategoryDTO : BaseDTO<Category>
{
    [MinLength(5, ErrorMessage = "Name is too short, min: 5 characters")]
    public string Name { get; set; }
    public string Image { get; set; }
    public override void UpdateModel(Category model)
    {
        model.Name = Name;
        model.Image = Image;
    }
}