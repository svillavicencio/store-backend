const productsDatabase = require('./products.mongo');

async function getAllProducts(){
    try {
        return await productsDatabase.find({}, {'_id': 0, '__v': 0})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllProducts
}