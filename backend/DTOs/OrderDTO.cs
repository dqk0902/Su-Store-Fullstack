using System.ComponentModel.DataAnnotations;
namespace Ecommerce.DTOs;

using Ecommerce.Models;

using System.Collections.Generic;


public class OrderDTO : BaseDTO<Order>
{
    public decimal TotalPrice { get; set; }
    public int UserId { get; set; }
    public Order.OrderStatus Status { get; set; }

    public override void UpdateModel(Order model)
    {
        model.TotalPrice = TotalPrice;
        model.UserId = UserId;
        model.Status = Status;
    }
}