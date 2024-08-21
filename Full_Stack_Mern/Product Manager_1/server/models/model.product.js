const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, '{PATH} must be at least 3 character long']
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [5, '{PATH} must be at least 5 character long']
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product
