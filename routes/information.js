const express = require ('express');
const router = express.Router ();
const informationctrl = require ('../controllers/informationctrl');

//GET information in the controller
router.get("/information", informationctrl.get);

module.exports = router;