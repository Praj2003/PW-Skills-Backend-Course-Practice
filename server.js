//this is the starting file of the project


const express = require("express");
const mongoose = require("mongoose");
const db_config = require("./configs/db.config");
const  server_config = require("./configs/server.config")
const user_model = require("./models/user.model");
const bcrypt = require("bcryptjs");


const app = express();

app.use(express.json());//It is a middleware

//connection to the database

mongoose.connect(db_config.DB_URL);

const db = mongoose.connection;//forcing the connection on the database

//Error handling dring connection

db.on("error",() =>{
    console.log("There is some error while connecting to the database");

})

db.once("open",() =>{
    console.log("Database has been connected successfully!");
    init();
})

async function init(){
    //Checking whether admin is present or not if not create one 
    try{
        const user = await user_model.findOne({userId : "Admin"});

        if(user){
            console.log("Admin is already present in the database!");
            return
        }

    }catch{err}{
        console.log("error while checking the admin in the database!");
    }

    try{
        const admin = {
            name : "Prajval Kumar",
            email : "Prajvarish@gamil.com",
            userId : "Admin",
            UserType : "ADMIN",
            password : bcrypt.hashSync("Welcome1",8)

        }

        const adminCreate = await user_model.create(admin);

        console.log(adminCreate);



    }catch(err){
        console.log("There is some error in creating the admin!");

    }
}
//stiching the route to server.js file
require("./routes/auth.route")(app);

require("./routes/category.route")(app);




//Setting up the server

app.listen(server_config.PORT,() =>{
    console.log("Server is running on the Port: ",server_config.PORT);
})

