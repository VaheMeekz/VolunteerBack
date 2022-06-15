var express = require('express');
var router = express.Router();
const aboutUsController = require('../controllers/aboutUsController')
const adminMiddleware = require('../middleware/adminMiddleware')

//admin routes
router.get('/',aboutUsController.getAll)
router.post('/edit',adminMiddleware,aboutUsController.edit)


module.exports = router