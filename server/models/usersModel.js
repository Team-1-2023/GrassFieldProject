const mysql = require("mysql2");
const connection = require("./index.js")



const chekuser = async (username) => {
    var sql = `SELECT * FROM users WHERE username = ? `
    return connection.promise().query(sql, [username])
}
const addUser = async (username, password, adress)=>{
    const sql2 = "INSERT INTO users (username,password,adress) VALUES (?,?,?)"
    return connection.promise().query(sql2, [username, password, adress])
}




module.exports = { chekuser ,addUser}