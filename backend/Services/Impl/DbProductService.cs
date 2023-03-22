using Ecommerce.Db;
using Ecommerce.DTOs;
using Ecommerce.Models;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Services;

public class DbProductService : DbCrudService<Product, ProductDTO>, IProductService
{
    public DbProductService(AppDbContext dbContext) : base(dbContext)
    {
    }
    public override async Task<ICollection<Product>> GetAllAsync()
    {
        return await _dbContext.Products
            .AsNoTracking()
            .Include(p => p.Category)
            // Eager loading
            .Where(p => true)
            .OrderByDescending(p => p.CreatedAt)
            .ToListAsync();
    }

    public override async Task<Product?> GetAsync(int id)
    {
        var product = await base.GetAsync(id);
        if (product is null)
        {
            return null;
        }
        // Explicit loading
        await _dbContext.Entry(product).Reference(p => p.Category).LoadAsync();
        await _dbContext.Entry(product).Reference(p => p.Order).LoadAsync();
        return product;
    }

}