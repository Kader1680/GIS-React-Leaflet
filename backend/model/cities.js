const mongoose = require('mongoose');
const schema = mongoose.Schema

const CitiesShema = new schema({
    name : {type: String, required: true},
    code : {type: Number, required: true},
    center : {type: Array, required: true},
    border : {type: String, required: true},


})

// const product = mongoose.model('Name_of_collection', Name_of_schema)
const Cities = mongoose.model('Cities', CitiesShema)
module.exports  = Cities