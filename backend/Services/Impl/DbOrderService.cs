using Ecommerce.Db;
using Ecommerce.DTOs;
using Ecommerce.Models;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.Services;

public class DbOrderService : DbCrudService<Order, OrderDTO>, IOrderService
{
    public DbOrderService(AppDbContext dbContext) : base(dbContext)
    {
    }
    public override async Task<ICollection<Order>> GetAllAsync()
    {
        return await _dbContext.Orders
            .AsNoTracking()
            .Include(o => o.Products)
            .ToListAsync();
    }
    public override async Task<Order?> GetAsync(int id)
    {
        var order = await base.GetAsync(id);
        if (order is null)
        {
            return null;
        }
        // Explicit loading
        await _dbContext.Entry(order).Collection(o => o.Products).LoadAsync();
        return order;
    }
}
