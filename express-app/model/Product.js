const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        require: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    category: {
        type: String,
        values: ['Electronics', 'Books', 'Cloths', 'Appliances'],
        message: 'Unsupported category'
    },

    /**
     * imageUrl: String
     */
    
    imageUrl: {
        type: String
    }
})

//generate a model class from the schema - adds the generated class back to mongoose model
mongoose.model('Product', productSchema)