namespace Ecommerce.Services;

using Ecommerce.Models;
using Ecommerce.DTOs;

public interface ICategoryService
{
    Category? Create(CategoryDTO request);
    Category? Get(int id);
    Category? Update(int id, CategoryDTO request);
    bool Delete(int id);
    ICollection<Category> GetAll();
}
