import { API_LINK } from "../App";
import { IAlert } from "../data/types/alerts";
import { MyHeroService } from "./Service";
import axios from 'axios';
import { useReduxState } from "../data/store";
import Users from "./User";

const myHeaders = new Headers();

const myLatitude = 15;
const myLongitude = 3;

export let AlertStatusView = false;
export let AlertStatusDataView = ""; // email de la personne prise en charge
export let AlertStatusDataViewReq = ""; // email de la personne prise en charge

export let AlertsData = [];
export let AlertsDataUsers = [];

export function SetStatusDataViewReq(title: string) {
    AlertStatusDataViewReq = title;
}

export function setAlertStatus(bool: boolean, data: string) {
    AlertStatusView = bool;
    AlertStatusDataView = data;
    AlertStatusDataViewReq = "";
}

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
    public static ViewerData = {
        identifier: "",
        count: 0,
        status: false,
        id: 0
    }

    public static SendAlert(data: IAlert) {
        MyHeroAlerts.getCityGE(data.latitude, data.longitude, (e: any) => {
            console.log(e)
            
            var params = {
                identifier: data.identifier,
                level: data.level,
                source: data.source,
                latitude: data.latitude,
                longitude: data.longitude,
                description: data.description,
                webrtc: data.webrtc,
                city: e
            }
            
            fetch(`${API_LINK}/alerts/add`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            })
            
            .then((res) => res.json)
            
            .then((data: any) => {
                console.log("fiobgfe", data.data)
            })
        })
    }
        
    public static DeleteAlert(data: IAlert) {
        var params = {
            identifier: data.identifier,
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

    public static GetAlerts(tbl: any) {
        this.StatusUpdate = true;
        
        const alerts = tbl || [];

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

        }
    }

    public static SetStatusUpdate(arg: boolean) {
        this.StatusUpdate = arg
    }

    public static getUsersCount() {
        let identifier = this.ViewerData.identifier

        axios.get(`/alerts/get_data_viewer/?id=${identifier}`)

        .then((response) => {
            const e = response;
            const status: number = e.status

            if (status === 200) {
                const nb = e.data || 0;

                console.log(nb)

                setTimeout(() => {
                    this.ViewerData.count = nb;
                }, 1500)
            }
        })

        .catch((err) => {
            console.log("err g", err);
        })
    }

    public static setViewerDataStatus(identifier: string, status: boolean) {
        this.ViewerData.identifier = identifier
        this.ViewerData.status = status;
    }

    public static cleanViewerData() {
        this.ViewerData.identifier = '';
        this.ViewerData.status = false;
        this.ViewerData.count = 0;
    }

    public static takeAlert(id: string, source: string) {
        fetch(`${API_LINK}/alerts/add_data_viewer/?id=${id}&source=${source}`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
        })
            .then(function(res) {
                console.log(res);
            })

            .catch(function(err) {
                console.log("errror", err)
            })
    }

    public static removeAlert(id: string) {
        fetch(`${API_LINK}/alerts/remove_data_viewer/?id=${id}`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
        })
            .then(function(res) {
                console.log(res);
            })

            .catch(function(err) {
                console.log("errror", err)
            })
    }

    public static getUsersData() {
        let identifier = this.ViewerData.identifier

        axios.get(`/alerts/get_data_viewer_users/?id=${identifier}`)

        .then((response) => {
            const e = response;
            const status: number = e.status

            if (status === 200) {
                AlertsDataUsers = [];
                const nb = e.data || 0;
                console.log(nb)

                nb.map((v, k) => {
                    Users.GetData(v, (e: any) => {
                        const data = JSON.stringify(e.data[0])
                        const status: number = e.status
                        const pseudo = e.data[0].pseudo
                    
                        if (status == 200) {
                            AlertsDataUsers.push(pseudo)
                        } else {
                            AlertsDataUsers.push(v);
                        }
                    }, () => {})
                })
            }
        })

        .catch((err) => {
            console.log("err g", err);
        })
    }

    public static getCityGE(lat: number, long: number, cb: any) {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyArT5OMnkTT_XGsskXjXA70VwBk2ZLSgQ8`)

        .then((response) => {
            const e = response;
            const status = e.status
            const city = response.data.results[0].address_components[2].long_name

            cb(city)
        })
      
        .catch((err) => {
            console.log("err g", err);
        })
    }
}

setInterval(() => {
    if (MyHeroAlerts.ViewerData.status == true) {
        MyHeroAlerts.getUsersCount();
        MyHeroAlerts.getUsersData();
    }
}, 10000)

