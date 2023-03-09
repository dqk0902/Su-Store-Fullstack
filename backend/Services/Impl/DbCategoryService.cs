using Ecommerce.Db;
using Ecommerce.DTOs;
using Ecommerce.Models;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Services;

public class DbCategoryService : DbCrudService<Category, CategoryDTO>, ICategoryService
{
    public DbCategoryService(AppDbContext dbContext) : base(dbContext)
    {
    }
}