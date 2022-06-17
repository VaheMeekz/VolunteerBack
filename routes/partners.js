var express = require('express');
var router = express.Router();
const partnerController = require('../controllers/partnersController')
const adminMiddleware = require('../middleware/adminMiddleware')

//user routes
router.get('/', partnerController.getAll)

//admin routes
router.post('/', adminMiddleware, partnerController.create)
router.post('/edit', adminMiddleware, partnerController.edit)
router.post('/delete', adminMiddleware, partnerController.deleteItem)


module.exports = router