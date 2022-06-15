var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController')
const adminMiddleware = require('../middleware/adminMiddleware')

//admin routes
router.post('/create',adminMiddleware,adminController.create)
router.get('/',adminMiddleware,adminController.getAll)
router.post('/delete',adminMiddleware,adminController.deleteAdmin)
router.post('/logout',adminMiddleware,adminController.logout)

//user routes
router.post('/login',adminController.login)

module.exports = router