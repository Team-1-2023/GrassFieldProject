const express = require("express")
const router = express.Router();

const getAllreviewC  = require("../controllers/reviewController")
const addReview = require("../controllers/reviewController")

router.get('/:productId', getAllreviewC);  
router.post('/:users_idusers/:products_idproducts', addReview);


module.exports = router;
