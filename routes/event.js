var express = require('express');
var router = express.Router();
const eventController = require('../controllers/eventController')
const adminMiddleware = require('../middleware/adminMiddleware')

//user routes
router.get('/', eventController.getAll)
router.get('/single', eventController.getSingle)
//admin routes
router.post('/create', adminMiddleware, eventController.create)
router.post('/delete', adminMiddleware, eventController.deleteItem)
router.post('/edit', adminMiddleware, eventController.edit)

//user routes

module.exports = router