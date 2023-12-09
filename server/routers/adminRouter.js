const express = require("express")
const router = express.Router();
const {getAllUsers,getAllProducts,removeProduct,removeUser,updateProduct,addProduct,removeReview,getAllReviews} = require("../controllers/adminController")

router.get("/users",getAllUsers)
router.get("/products", getAllProducts)
router.delete("/products/:id",removeProduct)
router.delete("/users/:id",removeUser)
router.put("/products/:id",updateProduct)
router.post("/products",addProduct)
router.get("/reviews",getAllReviews)
router.delete("/reviews/:id",removeReview)


module.exports = router
