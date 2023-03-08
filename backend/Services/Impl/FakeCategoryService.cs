using Ecommerce.DTOs;
using Ecommerce.Models;
using System.Collections.Concurrent;

namespace Ecommerce.Services;

public class FakeCategoryService : FakeCrudService<Category, CategoryDTO>, ICategoryService
{

}
