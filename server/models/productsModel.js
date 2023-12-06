const mysql = require("mysql2");
const connection = require("./index.js");

const getproduct = (callback) => {
  const query = "SELECT * FROM products";

  return connection.query(query, callback);
};

module.exports = { getproduct };