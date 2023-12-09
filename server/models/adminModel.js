const mysql = require("mysql2");
const connection = require("./index.js")


module.exports = {
    getAllUsers: function(callback){
        const sql = `select * from users`
        connection.query(sql,function(error,results){
            callback(error,results)
        })
    },
    getAllProducts: function(callback){
        const sql = `select * from products`
        connection.query(sql, function(error,results){
            callback(error,results)
        })
    },
    removeProduct: function(id,callback){
        const sql = `delete from products where idproducts = ${id}`
        connection.query(sql, function(error,results){
            callback(error,results)
        })
    },
    removeUser: function(id,callback){
        const sql = `delete from users where idusers = ${id}`
        connection.query(sql, function(error,results){
            callback(error,results)
        })
    },
    updateProduct: function(id,newPrice,callback){
        const sql = `update products set price = ${newPrice} where idproducts = ${id}`
        connection.query(sql, function(error,results){
            callback(error,results)
        })
    },
    addProduct: function(name,category,price,quantity,description,imageUrl,productType,callback){
        const sql = `insert into products (name,category,price,quantity,description,imageUrl,productType) values(?,?,?,?,?,?,?)`
        connection.query(sql,[name,category,price,quantity,description,imageUrl,productType],function(error,results){
            callback(error,results)
        })
    },
    removeReview: function(id,callback){
        const sql = `delete from reviews where reviews_id = ${id}`
        connection.query(sql, function(error,results){
            callback(error,results)
        })
    },
    getAllReviews: function(callback){
        const sql = `select * from reviews`
        connection.query(sql,function(error,results){
            callback(error,results)
        })
    }

}