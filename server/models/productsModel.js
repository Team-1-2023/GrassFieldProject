const mysql = require("mysql2");
const connection = require("./index.js");

const getproduct = (callback) => {
  const query = "SELECT * FROM products";

  connection.query(query, callback);
};

const getfiltredproduct =(category,type) =>{
    var sql = "SELECT * FROM products WHERE category = ? AND productType= ?"

   return connection.promise().query(sql,[category, type])
}

module.exports = { getproduct,getfiltredproduct };