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
    public class AlertStruct
    {
        public int id { get; set; }
        public string source { get; set; }
        public int level { get; set; }
        public int longitude { get; set; }
        public int latitude { get; set; }
        public string description { get; set; }
    }   

    public class AlertData {
        public static List<AlertStruct> Alerts = new List<AlertStruct>();

        public static List<AlertStruct> AddAlert(AlertStruct data) {
            Alerts.Add(new AlertStruct() { id = (Alerts.Count + 1), source = data.source, level = data.level, longitude = data.longitude, latitude = data.latitude, description = data.description });
            
            return Alerts;
        }

        public static List<AlertStruct> DeleteAlert(int id) {
            Alerts.RemoveAt(id);
           
            return Alerts;
        }
   
        public static List<AlertStruct> ReturnAlerts() {
            return Alerts;
        }
    }
}