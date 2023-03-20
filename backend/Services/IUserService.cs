namespace Ecommerce.Services;

using Ecommerce.Models;
using Ecommerce.DTOs;

public interface IUserService
{

    Task<User?> SignUpAsync(UserSignUpDTO request);
    Task<UserSignInResponseDTO?> SignInAsync(UserSignInDTO request);

    Task<User?> GetAsync(int id);
    Task<ICollection<User>> GetAllAsync();
    Task<User?> GetUserProfileAsync(string token);
}