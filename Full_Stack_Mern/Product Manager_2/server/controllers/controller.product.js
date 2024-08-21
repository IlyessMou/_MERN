const Product = require('../models/model.product') ;

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ product: newlyCreatedProduct })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.findALLProducts = (req, res) => {
    Product.find() //[]
        .then((AllProducts) => {
            console.log(">>> this is ALL My Products ", AllProducts)
            res.json(AllProducts)
        })
        .catch(err => {
            console.log("failed")
            res.status(400).json(err)
        })
}

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json(oneSingleProduct)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}