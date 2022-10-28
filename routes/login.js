const express = require ('express')
const router = express.Router ()
const loginctrl = require ('../controllers/loginctrl');

//GET login in the controller
router.get("/login", loginctrl.get);

module.exports = router