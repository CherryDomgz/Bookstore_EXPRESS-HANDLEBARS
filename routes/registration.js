const express = require ('express');
const router = express.Router ();
const registrationctrl = require ('../controllers/registrationctrl');

//GET registration in the controller
router.get("/registration", registrationctrl.get);

module.exports = router;