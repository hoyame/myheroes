namespace MyHeroApi.Models
{
    public class Users {
        public int id { get; set; }
        public string pseudo { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public int star { get; set; }
        public int xp { get; set; }
    }

    public class UserData {
        public int id { get; set; }
        public string user { get; set; }
        public int rate { get; set; }
        public string description { get; set; }
    }
}