using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyHeroApi;
using MyHeroApi.DB;
using MyHeroApi.Models;
using MyHeroApi.Migrations;

namespace MyHeroApi.Controllers
{
    [ApiController]
    public class AlertControllers {
        [HttpPost("api/alert/send_alert")]

        public void PostAlert(Alerts data) {

        }
    }
}