var express = require('express');
var router = express.Router();
const contactsController = require('../controllers/contactsController')
const adminMiddleware = require('../middleware/adminMiddleware')

router.post('/',adminMiddleware,contactsController.edit)
router.get('/',contactsController.getAll)

module.exports = router