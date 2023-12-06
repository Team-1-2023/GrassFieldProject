const express = require("express")
const router = express.Router();


const {addTobasketC,getBasketC,deleteFromBasketC} = require("../controllers/basketController.js")


router.post('/:userid',addTobasketC)
router.get('/:userid',getBasketC)
router.delete('/:userid/:productid',deleteFromBasketC)

module.exports = router
