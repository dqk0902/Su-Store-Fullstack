namespace NETCoreDemo.Services;

using NETCoreDemo.Models;

public interface IWeatherForecastService
{
    IEnumerable<WeatherForecast> Forecast(int days);
}
