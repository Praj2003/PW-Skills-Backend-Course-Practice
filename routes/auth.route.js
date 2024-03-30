const authController = require("../controllers/user.controller");
const express = require("express");

module.exports = (app) =>{
    app.post("/ecomm/api/v1/auth/signup",authController.signup);
}