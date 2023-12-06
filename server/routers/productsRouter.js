const express = require("express")
const router = express.Router();



const {getProductController}= require('../controllers/productController.js')

router.get('/',getProductController)
module.exports = router