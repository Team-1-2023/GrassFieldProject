const express = require("express")
const router = express.Router();
const {signupcontroller,login,logout} = require("../controllers/usersController.js")



router.post("/signup", signupcontroller)
router.post("/login", login)
router.post("/logout", logout)


module.exports = router