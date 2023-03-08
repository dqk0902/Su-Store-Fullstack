using Ecommerce.DTOs;
using Ecommerce.Models;
using System.Collections.Concurrent;

namespace Ecommerce.Services;

public class FakeCategoryService : ICategoryService
{
    private ConcurrentDictionary<int, Category> _categories = new();
    private int _categoryId;

    public Category? Create(CategoryDTO request)
    {
        var category = new Category
        {
            Id = Interlocked.Increment(ref _categoryId),
            Name = request.Name,
            Image = request.Image,
            CreatedAt = request.CreatedAt,
        };
        _categories[category.Id] = category;
        return category;
    }

    public bool Delete(int id)
    {
        if (!_categories.ContainsKey(id))
        {
            return false;
        }
        return _categories.Remove(id, out var _);
    }

    public Category? Get(int id)
    {
        if (_categories.TryGetValue(id, out var category))
        {
            return category;
        }
        return null;
    }

    public ICollection<Category> GetAll()
    {
        return _categories.Values;
    }

    public Category? Update(int id, CategoryDTO request)
    {
        var category = Get(id);
        if (category is null)
        {
            return null;
        }
        category.Name = request.Name;
        category.Image = request.Image;
        category.CreatedAt = request.CreatedAt;
        return category;
    }
}
