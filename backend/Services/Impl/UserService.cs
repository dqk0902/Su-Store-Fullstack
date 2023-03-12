using Ecommerce.DTOs;
using Ecommerce.Models;

namespace Ecommerce.Services;

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
        var roles = new[] { "Admin", "Customer" };
        await _userManager.AddToRolesAsync(user, roles);
        return user;
    }
}