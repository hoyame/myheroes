const { Router } = require('express');
const router = Router();
const appController = require('../controllers/appController');


router.post("/app/add_rate", appController.addRate);


module.exports = router;
