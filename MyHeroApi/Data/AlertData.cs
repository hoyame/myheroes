using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyHeroApi;
using MyHeroApi.DB;
using MyHeroApi.Models;
using MyHeroApi.Migrations;

namespace MyHeroApi.Data
{
    public struct AlertStruct
    {
        public string source { get; set; }
        public int longitude { get; set; }
        public int latitude { get; set; }
        public string description { get; set; }
    }   

    public class AlertData {
        AlertStruct a1 = new AlertStruct("", 1, 1, "");
    }
}