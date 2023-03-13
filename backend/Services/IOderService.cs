namespace Ecommerce.Services;

using Ecommerce.Models;
using Ecommerce.DTOs;

public interface IOrderService : ICrudService<Order, OrderDTO>
{
}