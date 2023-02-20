const mongoose = require('mongoose')


const DevSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
},

{timestamps: true}

);


module.exports= mongoose.model('Dev', DevSchema);
