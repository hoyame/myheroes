using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

using MyHeroApi.Models;

namespace MyHeroApi.DB
{
    public class WriteDB : DbContext
    {
        public DbSet<Users> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseMySQL("server=localhost;database=myhero;user=root;password=");
    }

       
    public class WriteDBUserData : DbContext
    {
        public DbSet<UserData> UserData { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseMySQL("server=localhost;database=myhero;user=root;password=");
    }
}