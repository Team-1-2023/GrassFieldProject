const bcrypt= require("bcryptjs")
const { chekuser, addUser } = require("../models/usersModel")


const signupcontroller = async (req, res) => {
    var { username, password, adress } = req.body

    const data = await chekuser(username)
   console.log(data)
    if (data[0].length) {
        return res.status(409).send("already exist")
    }

      //hash the password and creat a user
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
    addUser(username, hash, adress)
        .then((response => (res.send("user has been added"))))
        .catch(err => (res.send(err)))
}




const login = (req, res) => {

}

const logout = (req, res) => {

}

module.exports = { signupcontroller, login, logout }