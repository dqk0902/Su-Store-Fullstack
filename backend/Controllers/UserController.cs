namespace Ecommerce.Controllers;

using Ecommerce.Services;
using Ecommerce.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Ecommerce.Models;
public class UserController : ApiControllerBase
{
    private readonly IUserService _service;
    private readonly UserManager<User> _userManager;
    public UserController(IUserService service, UserManager<User> userManager)
    {
        _service = service;
        _userManager = userManager;
    }
    [HttpPost("signup")]
    public async Task<IActionResult> SignUp(UserSignUpDTO request)
    {
        var user = await _service.SignUpAsync(request);
        if (user is null)
        {
            return BadRequest();
        }
        return Ok(UserSignUpResponseDTO.FromUser(user));
    }
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var users = await _service.GetAllAsync();
        return Ok(UserDTO.FromUsers(users));
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var user = await _service.GetAsync(id);
        if (user == null)
        {
            return NotFound();
        }
        return Ok(UserDTO.FromUser(user));
    }
}