const mongoose = require("mongoose")

//defining the schema for category collection

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },

    description : {
        type : String,
        required : true,
        unique : true
    }


},{timestamps : true,versionKey : false})


module.exports = mongoose.model("Category",categorySchema);