namespace Ecommerce.Controllers;

using Ecommerce.Services;
using Ecommerce.Models;
using Ecommerce.DTOs;
using Microsoft.AspNetCore.Mvc;
public class CategoryController : ApiControllerBase
{
    private readonly ILogger<CategoryController> _logger;
    private readonly ICategoryService _service;

    public CategoryController(ILogger<CategoryController> logger, ICategoryService service)
    {
        _logger = logger;
        _service = service ?? throw new ArgumentNullException(nameof(service));
    }

    [HttpPost]
    public IActionResult Create(CategoryDTO request)
    {
        return Ok(_service.Create(request));
    }

    [HttpGet("{id:int}")]
    public ActionResult<Category?> Get(int id)
    {
        return _service.Get(id);
    }
    [HttpPut("{id:int}")]
    public IActionResult Update(int id, CategoryDTO request)
    {
        var category = _service.Update(id, request);
        if (category is null)
        {
            return NotFound("Category is not found");
        }
        return Ok(category);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        if (_service.Delete(id))
        {
            return Ok(new { Message = "Category is delete" });
        }
        return NotFound("Category is not found");
    }
    [HttpGet]
    public ICollection<Category> GetAll()
    {
        return _service.GetAll();
    }
}