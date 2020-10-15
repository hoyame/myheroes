const { Router } = require('express');
const router = Router();

const alertController = require('../controllers/alertController');

router.get('/alerts/get', alertController.returnAlerts);
router.get('/alerts/get/lenght', alertController.returnAlertsLenght);

router.post('/alerts/add', alertController.addAlert);


module.exports = router;
