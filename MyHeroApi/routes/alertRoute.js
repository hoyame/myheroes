const { Router } = require('express');
const router = Router();

const alertController = require('../controllers/alertController');


router.get('/alerts/get', alertController.returnAlerts);

router.get('/alerts/get/lenght', alertController.returnAlertsLenght);

router.post('/alerts/add', alertController.addAlert);

router.post('/alerts/remove', alertController.removeAlert);

router.post('/alerts/add_data_viewer', alertController.addDataViewer);

router.post('/alerts/remove_data_viewer', alertController.removeDataViewer);

router.get('/alerts/get_data_viewer', alertController.getDataViewer)

module.exports = router;
