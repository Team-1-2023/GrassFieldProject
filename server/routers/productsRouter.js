const express = require("express")
const router = express.Router();



const {getProductController,getFiltredProductController,getOneproductController}= require('../controllers/productController.js')

router.get('/',getProductController)
router.get('/:id',getOneproductController)
router.get('/:category/:type',getFiltredProductController)
module.exports = router