using Ecommerce.DTOs;
using Ecommerce.Models;
using Microsoft.EntityFrameworkCore;
namespace Ecommerce.Services;

using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

public class UserService : IUserService
{
    private readonly UserManager<User> _userManager;
    private readonly IRoleService _roleService;
    public UserService(UserManager<User> userManager, IRoleService roleService)
    {
        _userManager = userManager;
        _roleService = roleService;
    }

    public async Task<ICollection<User>> GetAllAsync()
    {
        return await _userManager.Users.AsNoTracking().ToListAsync();
    }

    public async Task<User?> GetAsync(int id)
    {
        return await _userManager.FindByIdAsync(id.ToString());
    }

    public Task<UserSignInResponseDTO?> SignInAsync(UserSignInDTO request)
    {
        throw new NotImplementedException();
    }

    public async Task<User?> SignUpAsync(UserSignUpDTO request)
    {
        var user = new User
        {
            FirstName = request.FirstName,
            LastName = request.LastName,
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
        var role = new[] { "Customer" };
        await _userManager.AddToRolesAsync(user, role);
        return user;
    }
}