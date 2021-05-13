let AlertsData = []
let AlertsUsersData = [];

let InfoData = []
let InfoDataValidate = []

const app = require('../app');
var d = new Date();
var ns = d.getHours();

module.exports.addAlert = (req, res, next) => {
    const identifier = req.body.identifier;
    const found = AlertsData.find(element => element.identifier == identifier);
    const indexOf = AlertsData.indexOf(found)


    const model = {
        identifier: req.body.identifier,
        id: AlertsData.length + 1,
        level: req.body.level,
        source: req.body.source,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        description: req.body.description,
        webrtc: req.body.webid,
        city: req.body.city,
        departement: req.body.departement,
        hour: ns,
        count: 0
    }
    
    AlertsData.push(model);
    console.log(AlertsData);
    AlertsUsersData[indexOf] = [];
    console.log(AlertsUsersData[indexOf]);

    app.sendAlertsAdd(AlertsData);
    res.send(model);
}

module.exports.removeAlert = (req, res, next) => {
    const identifier = req.body.identifier;
    const found = AlertsData.find(element => element.identifier == identifier);
    const indexOf = AlertsData.indexOf(found)
    
    const model = {
        identifier: req.body.identifier,
        id: AlertsData.length + 1,
        level: req.body.level,
        source: req.body.source,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        description: req.body.description,
        departement: req.body.departement,
        city: req.body.city,
        webrtc: req.body.webid
    }

    AlertsUsersData[indexOf] = [];
    AlertsData = AlertsData.filter(x => x.identifier != req.body.identifier);

    app.sendAlertsRemove([AlertsData, model]);
    res.send(AlertsData);
}

module.exports.addDataViewer = (req, res, next) => {
    const identifier = req.query.id || req.body.id;
    const source = req.query.source || req.body.source;
    const found = AlertsData.find(element => element.identifier == identifier);
    const indexOf = AlertsData.indexOf(found)
      
    AlertsData[indexOf] = { 
        identifier: AlertsData[indexOf].identifier,
        id: AlertsData[indexOf].id, 
        level: AlertsData[indexOf].level,
        source: AlertsData[indexOf].source,
        latitude: AlertsData[indexOf].latitude,
        longitude: AlertsData[indexOf].longitude,
        description: AlertsData[indexOf].description,
        webid: AlertsData[indexOf].webid,
        count: AlertsData[indexOf].count + 1
    }

    AlertsUsersData[indexOf].push(source);
    console.log("AUD : ", AlertsUsersData[indexOf])
    res.send(AlertsData[indexOf]);
}

module.exports.removeDataViewer = (req, res, next) => {
    const identifier = req.query.id || req.body.id;
    const found = AlertsData.find(element => element.identifier == identifier);
    const indexOf = AlertsData.indexOf(found)
      
    AlertsData[indexOf] = { 
        identifier: AlertsData[indexOf].identifier,
        id: AlertsData[indexOf].id, 
        level: AlertsData[indexOf].level,
        source: AlertsData[indexOf].source,
        latitude: AlertsData[indexOf].latitude,
        longitude: AlertsData[indexOf].longitude,
        description: AlertsData[indexOf].description,
        webid: AlertsData[indexOf].webid,
        count: AlertsData[indexOf].count - 1
    }

    res.send(AlertsData[indexOf]);
}


module.exports.getDataViewer = (req, res, next) => {
    const identifier = req.query.id || req.body.id;
    const found = AlertsData.find(element => element.identifier == identifier);
    const indexOf = AlertsData.indexOf(found)

    res.status(200).json(AlertsData[indexOf].count);
}

module.exports.getDataViewerUsers = (req, res, next) => {
    const identifier = req.query.id || req.body.id;
    const found = AlertsData.find(element => element.identifier == identifier);
    const indexOf = AlertsData.indexOf(found)

    res.status(200).json(AlertsUsersData[indexOf]);
}

module.exports.returnAlertFromIdentifier = (req, res, next) => {
    const identifier = req.query.id || req.body.id;
    const found = AlertsData.find(element => element.identifier == identifier);
    const indexOf = AlertsData.indexOf(found)

    res.status(200).json(AlertsData[indexOf]);
}

module.exports.returnAlerts = (req, res, next) => {
    app.sendAlertsGet(AlertsData);
}

module.exports.returnAlertsLenght = (req, res, next) => {
    let lenght = AlertsData.length
    res.send(lenght.toString());
}

//////////////////////////////////////////////////////////

module.exports.addList = (req, res, next) => {
    const model = {
        identifier: req.body.identifier,
        name: req.body.name,
        rate: req.body.rate,
        description: req.body.description,
        latitude: req.body.latitude, 
        longitude: req.body.longitude,
        hour: ns,
        city: req.body.city,
        departement: req.body.departement
    }
    
    InfoData.push(model)
    console.log(InfoData);    
}

module.exports.removeList = (req, res, next) => {
    const identifier = req.body.identifier;
    const found = InfoData.find(element => element.identifier == identifier);
    const indexOf = InfoData.indexOf(found)
    
    const model = {
        identifier: req.body.identifier,
        name: req.body.name,
        rate: req.body.rate,
        description: req.body.description,
        latitude: req.body.latitude, 
        longitude: req.body.longitude,
        city: req.body.city,
        departement: req.body.departement
    }

    InfoData = InfoData.filter(x => x.identifier != req.body.identifier);

    res.send(InfoData);
}

module.exports.removeListApprouved = (req, res, next) => {
    const identifier = req.body.identifier;
    const found = InfoDataValidate.find(element => element.identifier == identifier);
    const indexOf = InfoDataValidate.indexOf(found)

    InfoDataValidate = InfoDataValidate.filter(x => x.identifier != req.body.identifier);

    res.send(InfoDataValidate);
}

module.exports.approvateList = (req, res, next) => {
    const identifier = req.body.identifier;
    const found = InfoData.find(element => element.identifier == identifier);
    const indexOf = InfoData.indexOf(found)
    
    const model = {
        identifier: req.body.identifier,
        name: req.body.name,
        rate: req.body.rate,
        description: req.body.description,
        latitude: req.body.latitude, 
        longitude: req.body.longitude,
        hour: ns,
        city: req.body.city,
        departement: req.body.departement
    }

    console.log("approvate  ", model)

    InfoDataValidate.push(model);
    InfoData = InfoData.filter(x => x.identifier != req.body.identifier);
    app.sendListNotif(model);
}

module.exports.returnList = (req, res, next) => {
    res.send(InfoData);
}

module.exports.returnListValidate = (req, res, next) => {
    res.send(InfoDataValidate);
}

// Karim@gmail.com
// Acer@gmail.com

// Lol73100
