const mysql = require("mysql2");
const connection = require("./index.js");

const getAllReview = (productId, callback) => {
  const sql = 'SELECT * FROM reviews WHERE products_idproducts = ?';
  return connection.query(sql, [productId], callback);
};


const addReview = (users_idusers, products_idproducts, body, imageUrl,callback) => {
  const sql = 'INSERT INTO reviews (users_idusers, products_idproducts, body, imageUrl) VALUES (?, ?, ?, ?)'
  return connection.query(sql, [users_idusers, products_idproducts, body, imageUrl], callback);
};

module.exports = { getAllReview, addReview };

