using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Ecommerce.Models;
namespace Ecommerce.DTOs
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string UserName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Role { get; set; } = null!;

        private readonly IServiceProvider _serviceProvider;


        public UserDTO(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }
        private static async Task<string> GetRoleAsync(User user, IServiceProvider serviceProvider)
        {
            var userManager = (UserManager<User>?)serviceProvider.GetService(typeof(UserManager<User>));
            if (userManager == null)
            {
                return "DefaultRole";
            }
            var roles = await userManager.GetRolesAsync(user);
            return roles?.FirstOrDefault() ?? "DefaultRole";
        }
        public static List<UserDTO> FromUsers(IEnumerable<User> users, IServiceProvider serviceProvider)
        {
            List<UserDTO> userDTOs = new List<UserDTO>();
            foreach (var user in users)
            {
                userDTOs.Add(FromUser(user, serviceProvider).Result);
            }
            return userDTOs;
        }

        public static async Task<UserDTO> FromUser(User user, IServiceProvider serviceProvider)
        {
            if (serviceProvider == null)
            {
                throw new ArgumentNullException(nameof(serviceProvider));
            }
            var userDTO = new UserDTO(serviceProvider)
            {
                Id = user.Id,
                Name = user.Name,
                UserName = user.UserName,
                Email = user.Email,
                Role = await GetRoleAsync(user, serviceProvider)
            };
            return userDTO;
        }
    }
}