using System;
using System.Linq;
using System.Collections.Generic;
using MyHeroApi.Models;
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
            SavePseudo("hoyame");

            return (
                $"Hello, {person.Firstname} {person.Lastname}"
            );
        }

        private void SavePseudo(String pseudo) {
            using (var db = new WriteDB())
            {
                // Create
                Console.WriteLine("Inserting a new blog");
                db.Add(new users { pseudo = pseudo });
                db.SaveChanges();

            }
        }
    }
}