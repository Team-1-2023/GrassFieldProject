const { getAllReview, addReview } = require("../models/reviewModel.js");

const getAllreviewC = (req, res) => {
    const productId = req.params.productId;
    getAllReview(productId, (err, results) => {
        if (err) {
            console.error(err, "Error fetching reviews");
            res.status(500).json(err);
        } else {
            res.status(200).json(results);
        }
    });
};

const postReview = (req, res) => {
    const { users_idusers, products_idproducts } = req.params;
    const  { body, imageUrl } = req.body;
    addReview(users_idusers, products_idproducts, body, imageUrl, (err, results) => {
        if (err) {
            console.error(err, "Error adding review");
            res.status(500).json(err);
        } else {
            res.status(200).json("Review added successfully", results);
        }
    })
}

module.exports = { getAllreviewC, postReview };
