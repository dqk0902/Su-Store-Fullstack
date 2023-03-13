namespace Ecommerce.Controllers;

using Ecommerce.Services;
using Ecommerce.Models;
using Ecommerce.DTOs;
using Microsoft.AspNetCore.Mvc;

public class OrderController : CrudController<Order, OrderDTO>
{
    private readonly IOrderService _orderService;
    public OrderController(IOrderService service) : base(service)
    {
        _orderService = service;
    }
}