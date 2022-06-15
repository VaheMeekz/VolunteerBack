var express = require('express');
var router = express.Router();
const homeAboutController = require('../controllers/homeAboutController')
const adminMiddleware = require('../middleware/adminMiddleware')

//user routes
router.get('/',homeAboutController.getAll)
//admin routes
router.post('/edit',adminMiddleware,homeAboutController.edit)

//user routes

module.exports = router