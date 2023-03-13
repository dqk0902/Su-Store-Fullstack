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

}
