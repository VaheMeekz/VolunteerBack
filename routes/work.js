var express = require('express');
var router = express.Router();
const workController = require('../controllers/workContoller')
const adminMiddleware = require('../middleware/adminMiddleware')

//user routes
router.get('/',workController.getAll)
router.get('/single',workController.getSingle)
//admin routes
router.post('/',adminMiddleware,workController.create)
router.post('/delete',adminMiddleware,workController.deleteItem)

module.exports = router