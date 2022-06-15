var express = require('express');
var router = express.Router();
const newsController = require('../controllers/newsContoller')
const adminMiddleware = require('../middleware/adminMiddleware')

//user routes
router.get('/', newsController.getAll)
router.get('/single', newsController.getSingle)

//admin routes
router.post('/', adminMiddleware, newsController.create)
router.post('/edit', adminMiddleware, newsController.edit)
router.post('/delete', adminMiddleware, newsController.deleteItem)


module.exports = router