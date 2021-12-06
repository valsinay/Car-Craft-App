const mongoose = require('mongoose');

let CarSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    horsePower: {
        type: Number,
        required: true
    },

    mileage: {
        type: Number,
        required: true
    },

    engineCapacity: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },
    engine:{
        type:String,
        required:true
    },
    euroStandard:{
        type:String,
        required:true
    },

    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        ref: "User"
        
    },
    ownerId:{
        type:String
    },
    imageUrl: {
        type: String,
        required:true
    }

});


const Car = mongoose.model('Car', CarSchema);
module.exports = Car;