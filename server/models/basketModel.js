const mysql = require("mysql2");
const connection = require("./index.js")


const addTobasketM = (userId,productId)=> {
    var  sql = `INSERT INTO basket (users_idusers,products_idproducts)
    VALUES (?, ?)`
    return connection.promise().query(sql, [userId, productId])
}

const getBasketM = (userId)=>{
    var sql = `SELECT * FROM products 
    INNER JOIN basket ON products.idproducts= basket.products_idproducts
    INNER JOIN users ON users.idusers= basket.users_idusers
    WHERE basket.users_idusers = ? `
    return  connection.promise().query(sql,[userId])
}

const deleteFromBasketM = (userId,productId) => {
    var sql = `DELETE FROM basket
    WHERE users_idusers = ? AND products_idproducts = ?`;
    return connection.promise().query(sql, [userId, productId]);
}







module.exports = {addTobasketM,getBasketM,deleteFromBasketM}