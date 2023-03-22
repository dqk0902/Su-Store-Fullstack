using Ecommerce.DTOs;
using Ecommerce.Models;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
namespace Ecommerce.Services;

using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

public class UserService : IUserService
{
    private readonly UserManager<User> _userManager;
    private readonly IRoleService _roleService;
    private readonly ITokenService _tokenService;
    public UserService(UserManager<User> userManager, IRoleService roleService, ITokenService tokenService)
    {
        _userManager = userManager;
        _roleService = roleService;
        _tokenService = tokenService;
    }

    public async Task<ICollection<User>> GetAllAsync()
    {
        return await _userManager.Users.AsNoTracking().ToListAsync();
    }

    public async Task<User?> GetAsync(int id)
    {
        return await _userManager.FindByIdAsync(id.ToString());
    }

    public async Task<User?> GetUserProfileAsync(string token)
    {
        var handler = new JwtSecurityTokenHandler();
        var access_token = handler.ReadJwtToken(token);
        var userId = access_token.Claims.FirstOrDefault(c => c.Type == "sub")?.Value;
        if (string.IsNullOrEmpty(userId))
        {
            throw new ArgumentException("Invalid token: missing sub claim");
        }
        return await _userManager.FindByIdAsync(userId);
    }

    public async Task<UserSignInResponseDTO?> SignInAsync(UserSignInDTO request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);
        if (user is null)
        {
            return null;
        }
        if (!await _userManager.CheckPasswordAsync(user, request.Password))
        {
            return null;
        }
        return await _tokenService.GenerateTokenAsync(user);
    }


    public async Task<User?> SignUpAsync(UserSignUpDTO request)
    {
        var user = new User
        {
            Name = request.Name,
            UserName = request.Email,
            Email = request.Email,
        };
        var result = await _userManager.CreateAsync(user, request.Password);
        if (!result.Succeeded)
        {
            return null;
        }
        await _roleService.CreateRolesAsync();

        // Assign roles to the user

        if (request.Email == "admin@gmail.com")
        {
            await _userManager.AddToRoleAsync(user, "Admin");
        }
        else
        {
            await _userManager.AddToRoleAsync(user, "Customer");
        }
        return user;
    }
}