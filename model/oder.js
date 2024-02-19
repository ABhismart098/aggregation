const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');

const data = new Mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    product:{
        type: String,
        required: true
    },
    Brand:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    age:{
        type: Number,
        required: true
    }

})

const data_model = mongoose.model('data_model', data);
module.exports = data_model;