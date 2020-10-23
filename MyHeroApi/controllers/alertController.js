let AlertsData = []

module.exports.addAlert = (req, res, next) => {
    const model = {
        id: AlertsData.length + 1,
        level: req.body.level,
        source: req.body.source,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        description: req.body.description
    }
    
    AlertsData.push(model);

    res.send(AlertsData);
}

module.exports.returnAlerts = (req, res, next) => {
    res.send(AlertsData);
}

module.exports.returnAlertsLenght = (req, res, next) => {
    let lenght = AlertsData.length
    res.send(lenght.toString());
}