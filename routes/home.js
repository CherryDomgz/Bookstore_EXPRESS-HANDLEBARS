const express = require ('express')
const router = express.Router ()
const homectrl = require ('../controllers/homectrl');

// GET home in the controller
router.get("/", homectrl.get);



module.exports = router;
