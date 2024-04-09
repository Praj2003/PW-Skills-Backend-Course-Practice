const authController = require("../controllers/user.controller");
const authMw = require("../middlewares/auth.mw");


module.exports = (app) =>{
    app.post("/ecomm/api/v1/auth/signup",[authMw.verifySignUp],authController.signup);

    app.post("/ecomm/api/v1/auth/signin",authController.signIn);
}