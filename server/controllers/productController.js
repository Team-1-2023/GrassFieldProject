const { getproduct ,getfiltredproduct, getOneproduct} = require('../models/productsModel.js');

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
const getFiltredProductController = (req, res) => {

    getfiltredproduct(req.params.category, req.params.type).then((products) => {
        res.send(products[0])}).catch((err) => { res.send(err)

    });
}

const getOneproductController = (req,res) => {
  getOneproduct(req.params.id).then(response=>res.send(response[0])).catch(error=>res.send(error))
}


module.exports = { getProductController ,getFiltredProductController, getOneproductController};