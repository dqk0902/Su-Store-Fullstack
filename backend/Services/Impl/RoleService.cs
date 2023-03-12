using Microsoft.AspNetCore.Identity;
namespace Ecommerce.Services;

public class RoleService : IRoleService
{
    private readonly RoleManager<IdentityRole<int>> _roleManager;
    public RoleService(RoleManager<IdentityRole<int>> roleManager)
    {
        _roleManager = roleManager;
    }


    public async Task CreateRolesAsync()
    {
        var roles = new[] { "Admin", "Customer" };
        foreach (var role in roles)
        {
            if (await _roleManager.FindByNameAsync(role) is null)
            {
                await _roleManager.CreateAsync(new IdentityRole<int>
                {
                    Name = role,
                });
            }
        }
    }
}