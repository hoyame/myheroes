let AlertsData = []

module.exports.addAlert = (req, res, next) => {
    const model = {
        source: req.body.source,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        description: req.body.description
    }
    
    AlertsData.push(model);

    res.send(AlertsData);
}

module.exports.returnAlerts = (req, res, next) => {
    res.send(false);
}