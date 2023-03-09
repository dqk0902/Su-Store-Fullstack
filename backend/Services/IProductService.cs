namespace Ecommerce.Services;

using Ecommerce.Models;
using Ecommerce.DTOs;

public interface IProductService : ICrudService<Product, ProductDTO>
{
}