let AlertsData = []


module.exports.addAlert = (req, res, next) => {
    const model = {
        id: AlertsData.length + 1,
        level: req.body.level,
        source: req.body.source,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        description: req.body.description,
        webid: req.body.webid,
        count: 0
    }
    
    AlertsData.push(model);
    console.log(AlertsData)

    res.send(AlertsData);
}

module.exports.removeAlert = (req, res, next) => {
    const model = {
        id: AlertsData.length + 1,
        level: req.body.level,
        source: req.body.source,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        description: req.body.description,
        webid: req.body.webid
    }

    AlertsData = AlertsData.filter(x => x.source != req.body.source);

    res.send(AlertsData);
}

module.exports.addDataViewer = (req, res, next) => {
    const id = req.body.id;

    const found = AlertsData.find(element => element.id == id);
    const indexOf = AlertsData.indexOf(found)
      
    AlertsData[indexOf] = { 
        id: AlertsData[indexOf].id, 
        level: AlertsData[indexOf].level,
        source: AlertsData[indexOf].source,
        latitude: AlertsData[indexOf].latitude,
        longitude: AlertsData[indexOf].longitude,
        description: AlertsData[indexOf].description,
        webid: AlertsData[indexOf].webid,
        count: AlertsData[indexOf].count + 1
    }

    res.send(AlertsData[indexOf]);
}

module.exports.removeDataViewer = (req, res, next) => {
    const id = req.body.id;

    const found = AlertsData.find(element => element.id == id);
    const indexOf = AlertsData.indexOf(found)
      
    AlertsData[indexOf] = { 
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
    const id = req.query.id;

    const found = AlertsData.find(element => element.id == id);
    const indexOf = AlertsData.indexOf(found)

    res.status(200).json(AlertsData[indexOf].count);

    //res.send(AlertsData[indexOf].count);
}

module.exports.returnAlerts = (req, res, next) => {
    res.send(AlertsData);
}

module.exports.returnAlertsLenght = (req, res, next) => {
    let lenght = AlertsData.length
    res.send(lenght.toString());
}

// Karim@gmail.com
// Lol73100

/*

let obj = [
  { id: 2, name: "wdobiwfo", desc: "wudibwuifbwiuf" },
  { id: 4, name: "wdobiwfo", desc: "wudibwuifbwiuf" },
  { id: 6, name: "wdobiwfo", desc: "wudibwuifbwiuf" }
]


const found = obj.find(element => element.id == 4);
const indexOf = obj.indexOf(found)


console.log(indexOf);




*/