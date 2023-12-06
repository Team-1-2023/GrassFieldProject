const {addTobasketM,getBasketM} = require('../models/basketModel.js')


const addTobasketC = (req,res) => {
    console.log(req.body,req.params.userid)
    productId = req.body.productid
    userId = req.params.userid
    addTobasketM(userId,productId).then(response=>{res.send(response)}).catch(error=>res.send(error))
}

const getBasketC = (req,res)=> {
    userId=req.params.userid
    getBasketM(userId).then(response=>res.send(response[0])).catch(error=>res.send(error))
}





module.exports = {addTobasketC,getBasketC}