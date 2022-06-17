var express = require('express');
var router = express.Router();
const homeBannerController = require('../controllers/abouUsBannerController');
const adminMiddleware = require('../middleware/adminMiddleware');

//user routes
router.get('/', homeBannerController.getAll)
//admin routes
router.post('/create', adminMiddleware, homeBannerController.create)
router.post('/delete', adminMiddleware, homeBannerController.deleteSlide)
router.post('/edit', adminMiddleware, homeBannerController.edit)

//user routes

module.exports = router