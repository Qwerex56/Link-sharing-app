using Microsoft.AspNetCore.Mvc;

namespace LinkSharingApp.Controllers;

public class HelloController : Controller
{
    [HttpGet]
    public string GetHello()
    {
        return "Hello from http get in HelloController";
    }
}