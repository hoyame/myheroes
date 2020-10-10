namespace MyHeroApi.Models
{
    public class Users {
        public int id { get; set; }
        public string pseudo { get; set; }
        public string email { get; set; }
        public string password { get; set; }

        public class data { 
            public int star { get; set; }
            public int xp { get; set; }
        }
    }
}