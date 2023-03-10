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
    public override async Task<ICollection<Category>> GetAllAsync()
    {
        return await _dbContext.Categories
            .AsNoTracking()
            .Include(s => s.Products)
            .ToListAsync();
    }
    public override async Task<Category?> GetAsync(int id)
    {
        var category = await base.GetAsync(id);
        if (category is null)
        {
            return null;
        }
        // Explicit loading
        await _dbContext.Entry(category).Collection(c => c.Products).LoadAsync();
        return category;
    }


}