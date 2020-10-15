using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyHeroApi;
using MyHeroApi.DB;
using MyHeroApi.Models;
using MyHeroApi.Migrations;
using MyHeroApi.Data;
using Microsoft.AspNetCore.Cors;

/*
    {
        "id": 1,
        "source": "hoyame",
        "longitude": 684,
        "latitude": 4246,
        "description": "zboub en feu"
    }
*/

namespace MyHeroApi.Controllers
{
    [EnableCors] 
    [ApiController]

    public class AlertControllers {
        
        [HttpPost("api/alert/add")]
        public List<AlertStruct> PostAlert(AlertStruct data) {
            AlertData.AddAlert(data);

            return AlertData.Alerts;
        }

        [HttpPost("api/alert/delete")]

        public List<AlertStruct> DeleteAlert(AlertStruct data) {
            AlertData.DeleteAlert(data.id);

            return AlertData.Alerts;
        }

        [HttpGet("api/alert/get")]

        public List<AlertStruct> ReturnAlert(AlertStruct alerts) {
            return AlertData.Alerts;
        }
    }
}