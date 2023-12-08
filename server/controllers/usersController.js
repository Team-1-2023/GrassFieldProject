const bcrypt = require("bcryptjs")
const jwt = require ("jsonwebtoken")
const { chekuser, addUser,chekuserlogin } = require("../models/usersModel")


const signupcontroller = async (req, res) => {
    var { username, adress, password } = req.body

    const data = await chekuser(username)
    console.log(data[0][0].password)
    if (data[0].length) {
        return res.status(409).send("user already exist")
    }

    //hash the password and creat a user
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    addUser(username, adress, hash)
        .then((response => (res.send("user has been added"))))
        .catch(err => (res.send(err)))
}




const login = async (req, res) => {
    var { username, password } = req.body

    const data = await chekuserlogin (username)
    console.log(data[0][0].password )
    if (data[0].length ===0) {
        return res.status(404).send("user not found")
    }

    //hash the password and creat a user
    const isPasswordCorrect = bcrypt.compareSync(
        password,
        data[0][0].password
      );

      if (!isPasswordCorrect){
      return res.status(400).json("Wrong username or password!")}
    
      const token = jwt.sign({ id: data[0][0].id }, "jwtkey");
      const { password: userPassword, ...other } = data[0][0];

      res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
 


}

const logout = (req, res) => {

}

module.exports = { signupcontroller, login, logout }