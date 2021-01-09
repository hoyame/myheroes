const { Router } = require('express');
const router = Router();
const appController = require('../controllers/appController');


router.post("/app/add_rate", appController.addRate);
router.post("/app/add_faq", appController.addFaq);


module.exports = router;
