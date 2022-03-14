const { getAllProducts } = require('../../models/products/products.model')

function httpGetAllProducts(req, res) {
    return res.status(200).send(getAllProducts());
}

module.exports = {
    httpGetAllProducts,
}