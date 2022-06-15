var express = require('express');
var router = express.Router();
const contactsUsController = require('../controllers/constactUsController')
const adminMiddleware = require('../middleware/adminMiddleware')

router.post('/', contactsUsController.create)
router.get('/', adminMiddleware, contactsUsController.getAll)
router.post('/sendAnswer', adminMiddleware, contactsUsController.sendAnswer)
router.post('/delete', adminMiddleware, contactsUsController.deleteItem)
module.exports = router