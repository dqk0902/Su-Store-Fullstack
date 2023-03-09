namespace Ecommerce.Controllers;

using Ecommerce.Services;
using Ecommerce.Models;
using Ecommerce.DTOs;
using Microsoft.AspNetCore.Mvc;

public class ProductController : CrudController<Product, ProductDTO>
{
    private readonly IProductService _productService;
    public ProductController(IProductService service) : base(service)
    {
        _productService = service;
    }
}