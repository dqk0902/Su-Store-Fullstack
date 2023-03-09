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
}