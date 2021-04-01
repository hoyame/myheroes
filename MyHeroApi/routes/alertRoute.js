const { Router } = require('express');
const router = Router();

const alertController = require('../controllers/alertController');


router.get('/alerts/get', alertController.returnAlerts);

router.get('/alerts/get/lenght', alertController.returnAlertsLenght);

router.post('/alerts/add', alertController.addAlert);

router.post('/alerts/remove', alertController.removeAlert);

router.post('/alerts/add_data_viewer', alertController.addDataViewer);

router.post('/alerts/remove_data_viewer', alertController.removeDataViewer);

router.get('/alerts/get_data_viewer', alertController.getDataViewer);

router.get('/alerts/get_data_viewer_users', alertController.getDataViewerUsers);


router.post('/list/add', alertController.addList);

router.post('/list/approvate', alertController.approvateList);

router.post('/list/delete', alertController.removeList);

router.post('/list/deleteApprovate', alertController.removeListApprouved);

router.get('/list/get', alertController.returnList);

router.get('/list/get-verif', alertController.returnListValidate);



module.exports = router;
