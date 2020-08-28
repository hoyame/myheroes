using System.Collections.Generic;
using demo_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace MyHeroApi.Controllers
{
    [ApiController]
    public class ThingsController
    {
        [HttpGet("api/test")]
        public List<string> GetAll()
        {
            return new List<string> {
                "a", "b", "c", "zbbj"
            };
        }

        [HttpGet("api/test2")]
        public string GetAll2()
        {
            return "Hello 2";
        }

        [HttpPost("api/post")]
        public string Post(Person person)
        {
            return SayHello(person);
        }

        private string SayHello(Person person)
        {
            return $"Hello, {person.Firstname} {person.Lastname}";
        }
    }
}