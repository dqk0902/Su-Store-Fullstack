namespace Ecommerce.Db;

using Microsoft.EntityFrameworkCore;
using Ecommerce.Models;
using Npgsql;

public class AppDbContext : DbContext
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
        var connString = _config.GetConnectionString("DefaultConnection");
        optionsBuilder
            .UseNpgsql(connString)
            .UseSnakeCaseNamingConvention();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Create an index on Name using Fluent API
        modelBuilder.Entity<Category>()
            .HasIndex(c => c.Name);

        base.OnModelCreating(modelBuilder);
    }

    public DbSet<Category> Categories { get; set; } = null!;
    public DbSet<Product> Products { get; set; } = null!;
}