const {getAllUsers,getAllProducts,removeProduct,removeUser,updateProduct,addProduct,getAllReviews,removeReview} = require("../models/adminModel")

module.exports = {
    getAllUsers: function(req,res){
        getAllUsers(function(error,results){
            if(error) console.log(error)
            else{
                res.json(results)
            }
        }
    )},
    getAllProducts: function(req,res){
        getAllProducts(function(error,results){
            if(error)console.log(error)
            else{
                res.json(results)
            }
        })
    },
    removeProduct: function(req,res){
        console.log(req.params.id)
        removeProduct(req.params.id,function(error,results){
            if(error) console.log(error)
            else{
                res.json("product removed successfully")
            }
        })
    },
    removeUser: function(req,res){
        removeUser(req.params.id,function(error,results){
            if(error) console.log(error)
            else{
                res.json("user deleted successfully")
            }
        })
    },
    updateProduct: function(req,res){
        updateProduct(req.params.id,req.body.price,function(error,results){
            if(error) console.log(error)
            else res.json("product updated successfully")
        })
    },
    addProduct: function(req,res){
        addProduct(req.body.name,req.body.category,req.body.price,req.body.quantity,req.body.description,req.body.imageUrl,req.productType,function(error,results){
            if(error) console.log(error)
           else res.json("added")
        })
    },
    getAllReviews: function(req,res){
        getAllReviews(function(error,results){
            if(error) console.log(error)
            else{
                res.json(results)
            }
        }
    )},
    removeReview: function(req,res){
        removeReview(req.params.id,function(error,results){
            if(error) console.log(error)
            else{
                res.json("review deleted successfully")
            }
        })
    }
    
}