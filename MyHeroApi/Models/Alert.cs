namespace MyHeroApi.Models
{
    public class Alerts {
        public string source { get; set; }
        public int level { get; set; }
        public int longitude { get; set; }
        public int latitude { get; set; }
        public string description { get; set; }
    }
}