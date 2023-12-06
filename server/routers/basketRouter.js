const express = require("express")
const router = express.Router();


const {addTobasketC,getBasketC} = require("../controllers/basketController.js")


router.post('/:userid',addTobasketC)
router.get('/:userid',getBasketC)

module.exports = router
