namespace Ecommerce.Db;

using Microsoft.EntityFrameworkCore;
using Ecommerce.Models;
using Npgsql;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

public class AppDbContext : IdentityDbContext<User, IdentityRole<int>, int>
{
    // Static constructor which will be run ONCE
    static AppDbContext()
    {
        // You can also do that automatically using Reflection

        // Use the legacy timestamp behaviour - check Npgsql for more details
        // Recommendation from Postgres: Don't use time zone in database
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }

    private readonly IConfiguration _config;

    public AppDbContext(DbContextOptions<AppDbContext> options, IConfiguration config) : base(options) => _config = config;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        var connString = _config.GetConnectionString("DefaultConnection");
        optionsBuilder
            .UseNpgsql(connString)
            .UseSnakeCaseNamingConvention();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        // Create an index on Name using Fluent API
        modelBuilder.Entity<Product>()
                    .HasOne(p => p.Category)
                    .WithMany(c => c.Products)
                    .HasForeignKey(p => p.CategoryId)
                    .OnDelete(DeleteBehavior.Cascade);
        modelBuilder.Entity<Product>()
                    .HasOne(p => p.Order)
                    .WithMany(c => c.Products)
                    .HasForeignKey(p => p.OrderId)
                    .OnDelete(DeleteBehavior.Cascade);
        modelBuilder.AddIdentityConfig();
    }

    public DbSet<Category> Categories { get; set; } = null!;
    public DbSet<Product> Products { get; set; } = null!;
    public DbSet<Order> Orders { get; set; } = null!;
}