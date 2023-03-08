namespace NETCoreDemo.Services;

using NETCoreDemo.Models;

public class WeatherForecastService : IWeatherForecastService
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastService> _logger;
    private int counter;

    public WeatherForecastService(ILogger<WeatherForecastService> logger)
    {
        _logger = logger;
        _logger.LogInformation("WeatherForecastService constructor");
    }

    public IEnumerable<WeatherForecast> Forecast(int days)
    {
        counter += Random.Shared.Next(-10, 10);

        return Enumerable.Range(1, days).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}