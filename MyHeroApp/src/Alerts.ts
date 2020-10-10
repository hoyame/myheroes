import Service from "./Service"

class IAlerts {
    public id: number | undefined;
    public source: string | undefined;
    public level: number | undefined;
    public longitude: number | undefined;
    public latitude: number | undefined;
    public description: string | undefined;
}

export default abstract class Alerts {
    public static AlertsData: IAlerts;


    public static SendAlert(data: IAlerts) {
        Service.post('api/alert/add', {
            source: data.source,
            level: data.level,
            longitude: data.longitude,
            latitude: data.latitude,
            description: data.description
        });
    }

    public static DeleteAlert(data: IAlerts) {
        Service.post('api/alert/delete', {
            id: data.id,
            source: data.source,
            level: data.level,
            longitude: data.longitude,
            latitude: data.latitude,
            description: data.description
        });
    }

    public static GetAlerts(data: IAlerts) {
        let resJson = Service.get('api/alert/get');

        return resJson;
    }
}