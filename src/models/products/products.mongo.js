const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    productID: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    codebar: {
        type: Number,
        required: true,
    },
    dateAdded: {
        type: Date,
        required: true,
    },
    sold: {
        type: Boolean,
        required: true,
        default: false,
    },
});

module.exports = mongoose.model('Product', productsSchema);