namespace Ecommerce.Services;

using Ecommerce.DTOs;
using Ecommerce.Models;

public interface ITokenService
{
    Task<UserSignInResponseDTO> GenerateTokenAsync(User user);
}