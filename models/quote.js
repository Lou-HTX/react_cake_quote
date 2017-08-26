var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuoteSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    guests: {
        type: Number,
        trim: true,
        required: "Cake for how many guests?"
    },

    shape: {
        type: String,
        required: "Please select a shape."
    },

    
    flavor: {
        type: String,
        required: "Please select a flavor."
    },

    size: {
        type: Number,
        required: true
    },

    topping: {
        type: String,
        required: "Please select a topping."
    },

    filling: {
        type: String,
    },

    instructions: {
        type: String,
    }
});

module.exports = mongoose.model("Quote" , QuoteSchema);