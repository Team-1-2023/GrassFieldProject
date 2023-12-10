const express = require("express")
const router = express.Router();

const {getAllreviewC,postReview}  = require("../controllers/reviewController")



router.get('/:productId', getAllreviewC);  
router.post('/:users_idusers/:products_idproducts', postReview);


module.exports = router;
