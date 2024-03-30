//this is the starting file of the project


const express = require("express");
const mongoose = require("mongoose");
const db_config = require("./configs/db.config");
const  server_config = require("./configs/server.config")

const app = express();

//connection to the database

mongoose.connect(db_config.DB_URL);

const db = mongoose.connection;//forcing the connection on the database

//Error handling dring connection

db.on("error",() =>{
    console.log("There is some error while connecting to the database");

})

db.once("open",() =>{
    console.log("Database has been connected successfully!");
})

//Setting up the server

app.listen(server_config.PORT,() =>{
    console.log("Server is running on the Port: ",server_config.PORT);
})

