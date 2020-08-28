using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace MyHeroApi
{
    public class WriteDB : DbContext
    {
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseMySQL("server=localhost;database=myhero;user=root;password=");
    }

    public class Blog
    {
        public int BlogId { get; set; }
        public string Url { get; set; }

        public List<Post> Posts { get; } = new List<Post>();
    }

    public class Post
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }

        public int BlogId { get; set; }
        public Blog Blog { get; set; }
    }

    public class users {
        
        public int Id { get; set; }
        public string pseudo { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }
}