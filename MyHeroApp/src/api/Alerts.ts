import { API_LINK } from "../App";
import { IAlert } from "../data/types/alerts";
import { MyHeroService } from "./Service";
import axios from 'axios';
import { useReduxState } from "../data/store";

const myHeaders = new Headers();
//const myLatitude = useReduxState(state => state.location.latitude);
//const myLongitude = useReduxState(state => state.location.longitude);

const myLatitude = 15;
const myLongitude = 3;

export let AlertsData: IAlert[] = [];

function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
}
  
function deg2rad(deg: number) {
  return deg * (Math.PI/180)
}

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
    //public static AlertsData: IAlert[];

    public static SendAlert(data: IAlert) {
        var params = {
            level: data.level,
            source: data.source,
            latitude: data.latitude,
            longitude: data.longitude,
            description: data.description
        }
    
        fetch(`${API_LINK}/alerts/add`, {
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
    
        fetch(`${API_LINK}/alerts/remove`, req)
            .then(function(res) {
                console.log(res);
            })

            .catch(function(err) {
                console.log("errror", err)
            })
        ;
    }

    public static GetAlerts() {
        this.StatusUpdate = true;
        axios.get(`${API_LINK}/alerts/get`)

        .then((response) => {
            const e = response;
            const status: number = e.status

            if (status === 200) {
                const alerts = e.data || [];

                if (AlertsData.length === alerts.length) {
                    return false
                } else if (AlertsData.length !== alerts.length) {
                    AlertsData = [];
                    
                    alerts.map((v: IAlert, k: any) => {
                        let dist = getDistanceFromLatLonInKm(myLatitude, myLongitude, v.latitude, v.longitude);
                        //if (dist < 50) {
                            AlertsData.push(v);
                        //}
                    })

                    MyHeroService.sendNotification('Alertes', 'Des alertes sont disponibles')
                }
            }
        })

        .catch((err) => {
            console.log("err", err);
        })
    }

    public static SetStatusUpdate(arg: boolean) {
        this.StatusUpdate = arg
    }
}