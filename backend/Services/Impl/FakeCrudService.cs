using System.Collections.Concurrent;
using Ecommerce.DTOs;
using Ecommerce.Models;

namespace Ecommerce.Services;

public class FakeCrudService<TModel, TDto> : ICrudService<TModel, TDto>
    where TModel : BaseModel, new()
    where TDto : BaseDTO<TModel>
{
    protected ConcurrentDictionary<int, TModel> _items = new();
    private int _itemId;

    public async Task<TModel?> CreateAsync(TDto request)
    {
        return await Task.Run(() =>
        {
            var item = new TModel
            {
                Id = Interlocked.Increment(ref _itemId), // Atomic operation
            };
            _items[item.Id] = item;
            request.UpdateModel(item);
            return item;
        });
    }

    public async Task<bool> DeleteAsync(int id)
    {
        return await Task.Run(() =>
        {
            if (!_items.ContainsKey(id))
            {
                return false;
            }
            return _items.Remove(id, out var _);
        });
    }

    public async Task<TModel?> GetAsync(int id)
    {
        return await Task.Run(() =>
        {
            if (_items.TryGetValue(id, out var item))
            {
                return item;
            }
            return null;
        });
    }

    public Task<ICollection<TModel>> GetAllAsync()
    {
        return Task.FromResult(_items.Values);
    }

    public async Task<TModel?> UpdateAsync(int id, TDto request)
    {
        return await Task.Run(async () =>
        {
            var item = await GetAsync(id);
            if (item is null)
            {
                return null;
            }
            request.UpdateModel(item);
            return item;
        });
    }
}