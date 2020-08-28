namespace MyHeroApi.Models
{
    public class UsersRegister {
        
        public int id { get; set; }
        public string pseudo { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }

    public class UserLogin {
        public string email { get; set; }
        public string password { get; set; }
    }
}