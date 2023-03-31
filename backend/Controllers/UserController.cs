namespace Ecommerce.Controllers;

using Ecommerce.Services;
using Ecommerce.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Ecommerce.Models;

[Authorize]
public class UserController : ApiControllerBase
{
    private readonly IUserService _service;

    public UserController(IUserService service)
    {
        _service = service;
    }
    [AllowAnonymous]
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
    [AllowAnonymous]
    [HttpPost("signin")]
    public async Task<IActionResult> SignIn(UserSignInDTO request)
    {
        var response = await _service.SignInAsync(request);
        if (response is null)
        {
            return Unauthorized();
        }
        return Ok(response);
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var users = await _service.GetAllAsync();
        var serviceProvider = HttpContext.RequestServices;
        var userDTOs = UserDTO.FromUsers(users, serviceProvider);
        return Ok(userDTOs);
    }
    
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var user = await _service.GetAsync(id);
        if (user == null)
        {
            return NotFound();
        }
        var serviceProvider = HttpContext.RequestServices;
        var userDTO = await UserDTO.FromUser(user, serviceProvider);
        return Ok(userDTO);
    }
    [HttpGet("profile")]
    public async Task<IActionResult> GetUserProfile()
    {
        var token = Request.Headers["Authorization"].ToString().Replace("Bearer ", "");
        var user = await _service.GetUserProfileAsync(token);
        if (user == null)
        {
            return NotFound();
        }
        var serviceProvider = HttpContext.RequestServices;
        var userDTO = await UserDTO.FromUser(user, serviceProvider);
        return Ok(userDTO);
    }
}