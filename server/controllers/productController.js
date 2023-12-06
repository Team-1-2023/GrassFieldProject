const { getproduct } = require('../models/productsModel.js');

const getProductController = (req, res) => {
  getproduct((err, results) => {
    if (err) {
      console.error("Error fetching products", err);
      res.status(500).json(err);
    } else {
      res.json(results);
    }
  });
};

module.exports = { getProductController };