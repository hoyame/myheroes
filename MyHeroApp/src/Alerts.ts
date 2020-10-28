import { IAlert } from "./data/types/alerts";
import { MyHeroService } from "./Service";

var myHeaders = new Headers();


const fetchApiCall = async () => {
    var params = {
        pseudo: 'datapseudo',
        email: 'dataemai',
        password: 'datapassword'
    }

    fetch('https://discordapp.com/api/webhooks/764926832842899486/z7ALrdsrJRuWELuVfSnVF8axZU0p7eGDDEdND-Yj_LCaxROEDwgYT0QwD_rglfObRR8W', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
}

export default abstract class MyHeroAlerts {
    public static StatusUpdate: boolean = false;
    public static AlertsData = {};

    public static SendAlert(data: IAlert) {
        var params = {
            level: data.level,
            source: data.source,
            latitude: data.latitude,
            longitude: data.longitude,
            description: data.description
        }
    
        fetch('http://146.59.227.90:3333/alerts/add', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
    }

    public static DeleteAlert(data: IAlert) {
        var params = {
            level: data.level,
            source: data.source,
            latitude: data.latitude,
            longitude: data.longitude,
            description: data.description
        }

        let req = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }
    
        fetch('http://146.59.227.90:3333/alerts/remove', req)
            .then(function(res) {
                //console.log(res);
            })

            .catch(function(err) {
                //console.log("errror", err)
            })
        ;
    }

    public static GetAlerts() {
        this.StatusUpdate = true;

        fetch('http://146.59.227.90:3333/alerts/remove', { 
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
        })
            .then(function(res) {
                //console.log(res);
            })

            .catch(function(err) {
                //console.log("errror", err)
            })
        ;
            return this.AlertsData;
        }
}