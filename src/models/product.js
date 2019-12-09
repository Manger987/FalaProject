const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    code: Number,
    description: String,
    price: String,
    sellIn: Number
});

const Products = mongoose.model('Products',productSchema);
module.exports = Products;