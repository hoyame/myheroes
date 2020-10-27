const { Router } = require('express');
const router = Router();

const alertController = require('../controllers/alertController');


router.get('/alerts/get', alertController.returnAlerts);

router.get('/alerts/get/lenght', alertController.returnAlertsLenght);

router.post('/alerts/add', alertController.addAlert);

router.post('/alerts/remove', alertController.removeAlert);


module.exports = router;
