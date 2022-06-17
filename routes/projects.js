var express = require('express');
var router = express.Router();
const projectController = require('../controllers/projectController')
const adminMiddleware = require('../middleware/adminMiddleware')

//user routes
router.get('/', projectController.getAll)
router.get('/single', projectController.getSingle)

//admin routes
router.post('/', adminMiddleware, projectController.create)
router.post('/edit', adminMiddleware, projectController.edit)
router.post('/delete', adminMiddleware, projectController.deleteItem)


module.exports = router