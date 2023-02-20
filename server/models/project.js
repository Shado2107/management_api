const mongoose = require('mongoose')


const ProjectSchema = new mongoose.Schema({
    projectname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    client : {
        type: String,
        required: true,
        unique: true
    },
    duree: {
        type: number,

    }
},

{timestamps: true}

);


module.exports= mongoose.model('Project', ProjectSchema);
