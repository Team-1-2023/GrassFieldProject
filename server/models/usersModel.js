const mysql = require("mysql2");
const connection = require("./index.js")


//use for userSignup 
const chekuser = async (username) => {
    var sql = `SELECT * FROM users WHERE username = ? `
    return connection.promise().query(sql, [username])
}

const addUser = async (username, adress,  password)=>{
    const sql2 = "INSERT INTO users (username,adress,password) VALUES (?,?,?)"
    return connection.promise().query(sql2, [username, adress,password])
}


//use for  userLogin

const chekuserlogin = async (username) => {
    var sql = `SELECT * FROM users WHERE username = ? `
    return connection.promise().query(sql, [username])
}


module.exports = { chekuser ,addUser ,chekuserlogin}