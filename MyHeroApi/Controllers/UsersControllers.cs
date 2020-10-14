using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyHeroApi;
using MyHeroApi.DB;
using MyHeroApi.Models;
using MyHeroApi.Migrations;
using Microsoft.AspNetCore.Cors;

namespace MyHeroApi.Controllers
{
    [ApiController]
    public class UsersControllers
    {
        [HttpPost("api/users/register")]
        public bool SetData(Users data) {
            using (var db = new WriteDB()) {
                string hashed = BCrypt.HashPassword(data.password, BCrypt.GenerateSalt(12));

                db.Add(new Users { 
                    pseudo = data.pseudo,
                    email = data.email,
                    password = hashed 
                });

                db.SaveChanges();

                return true;
            }
        }

        [HttpPost("api/users/login")]
        public bool VerifLogin(Users data) {
            using (var db = new WriteDB()) {         
                return (
                    db.Users.Where(u => u.email == data.email).ToList().Any(u => BCrypt.CheckPassword(data.password, u.password))
                );
            }
        }

        [HttpPost("api/users/data/add")]

        public void AddData() {
            using (var db = new WriteDB()) {
                //return (
                //    
                //);
            }
        }

        
    }
}