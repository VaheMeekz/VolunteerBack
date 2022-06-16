var express = require('express');
var router = express.Router();
const homeWeDoController = require('../controllers/homeWeDoController')
const adminMiddleware = require('../middleware/adminMiddleware')

//user routes
router.get('/', homeWeDoController.getAll)
//admin routes
router.post('/edit', adminMiddleware, homeWeDoController.edit)


//user routes

module.exports = router