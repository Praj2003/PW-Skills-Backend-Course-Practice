const authController = require("../controllers/user.controller");


module.exports = (app) =>{
    app.post("/ecomm/api/v1/auth/signup",authController.signup);
}