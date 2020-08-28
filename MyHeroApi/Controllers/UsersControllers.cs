using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyHeroApi;
using MyHeroApi.DB;
using MyHeroApi.Models;
using MyHeroApi.Migrations;

namespace MyHeroApi.Controllers
{
    [ApiController]
    public class UsersControllers
    {
        [HttpPost("api/users/register")]
        public void SetData(UsersRegister data) {
            using (var db = new WriteDB()) {
                db.Add(new UsersRegister { 
                    pseudo = data.pseudo,
                    email = data.email,
                    password = data.password 
                });

                db.SaveChanges();
            }
        }

        [HttpPost("api/users/login")]

        public bool VerifLogin(UserLogin data) {
            using (var db = new WriteDB()) {               
                return db.Users.Any(u => u.email == data.email && u.password == data.password);
            }
        }
    }
}