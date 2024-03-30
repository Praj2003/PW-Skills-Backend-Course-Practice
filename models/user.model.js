//Creating user schema 
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const user_Schema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },
    
    email : {
        type : String,
        unique : true,
        lowercase : true,
        required : true
    },

    userId : {
        type : String,
        required : true

    },
    UserType : {
        type : String,
        default : "CUSTOMER",
        enum : ["CUSTOMER","ADMIN"],
        required : true
    },

    password :{
         type : String,
         required : true,
         unique : true
    }
},{timestamps : true, versionKey : false})


module.exports = mongoose.model("User",user_Schema);

