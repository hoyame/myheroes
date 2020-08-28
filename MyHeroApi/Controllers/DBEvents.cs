
using System;
using System.Linq;

namespace MyHeroApi
{
    class DBEvents
    {
        public void Save()
        {
            using (var db = new WriteDB())
            {
                // Create
                Console.WriteLine("Inserting a new blog");
                db.Add(new users { pseudo = "hoyame" });
                db.SaveChanges();

            }
        }
    }
}

/* 
                // Read
                Console.WriteLine("Querying for a blog");
                var blog = db.Blogs
                    .OrderBy(b => b.BlogId)
                    .First();

                // Update
                Console.WriteLine("Updating the blog and adding a post");
                blog.Url = "https://devblogs.microsoft.com/dotnet";
                blog.Posts.Add(
                    new Post
                    {
                        Title = "Hello World",
                        Content = "I wrote an app using EF Core!"
                    });
                db.SaveChanges();

                // Delete
                Console.WriteLine("Delete the blog");
                db.Remove(blog);
                db.SaveChanges();
            */