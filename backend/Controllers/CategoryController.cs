namespace Ecommerce.Controllers;

using Ecommerce.Services;
using Ecommerce.Models;
using Ecommerce.DTOs;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("categories")]
public class CategoryController : CrudController<Category, CategoryDTO>
{
    private readonly ICategoryService _categoryService;
    public CategoryController(ICategoryService service) : base(service)
    {
        _categoryService = service;
    }
}