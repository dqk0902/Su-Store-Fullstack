namespace Ecommerce.Controllers;

using Ecommerce.Services;
using Ecommerce.Models;
using Ecommerce.DTOs;
using Microsoft.AspNetCore.Mvc;

public abstract class CrudController<TModel, TDto> : ApiControllerBase
    where TModel : BaseModel
    where TDto : BaseDTO<TModel>
{
    protected readonly ICrudService<TModel, TDto> _service;

    public CrudController(ICrudService<TModel, TDto> service)
    {
        _service = service ?? throw new ArgumentNullException(nameof(service));
    }

    [HttpPost]
    public async virtual Task<IActionResult> Create(TDto request)
    {
        var item = await _service.CreateAsync(request);
        if (item is null)
        {
            return BadRequest();
        }
        return Ok(item);
    }

    [HttpGet("{id:int}")]
    public async virtual Task<ActionResult<TModel?>> Get(int id)
    {
        var item = await _service.GetAsync(id);
        if (item is null)
        {
            return NotFound("Item is not found");
        }
        return item;
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult<TModel?>> Update(int id, TDto request)
    {
        var item = await _service.UpdateAsync(id, request);
        if (item is null)
        {
            return NotFound("Item is not found");
        }
        return Ok(item);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        if (await _service.DeleteAsync(id))
        {
            return Ok(new { Message = "Item is deleted " });
        }
        return NotFound("Item is not found");
    }

    [HttpGet]
    public async Task<ICollection<TModel>> GetAll()
    {
        return await _service.GetAllAsync();
    }
}