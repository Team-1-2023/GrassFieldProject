const express = require("express")
const router = express.Router();



const {getProductController,getFiltredProductController}= require('../controllers/productController.js')

router.get('/',getProductController)
router.get('/:category/:type',getFiltredProductController)
module.exports = router