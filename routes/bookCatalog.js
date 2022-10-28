const express = require ('express');
const router = express.Router ();
const bookCatalogctrl = require ('../controllers/bookCatalogctrl');

//GET book CAtalog in the controller
router.get("/bookCatalog", bookCatalogctrl.get);


module.exports = router;