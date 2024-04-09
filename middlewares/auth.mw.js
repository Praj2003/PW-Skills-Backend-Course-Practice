//creating the middleware
const user_model = require("../models/user.model");

const verifySignUp = async (req, res, next) => {
  try {
    //checking if the name is present
    if (!req.body.name) {
      res.status(400).send({
        message: "Please fill name section!",
      });
    }
    //Similarly for email
    if (!req.body.email) {
      res.status(400).send({
        message: "Please fill email section!",
      });
    }

    if (!req.body.userId) {
      res.status(400).send({
        message: "Please fill userId section!",
      });
    }

    if (!req.body.password) {
      res.status(400).send({
        message: "Please fill password section!",
      });
    }

    next();

  } catch (err) {
    res.status(500).send({
      mesage: "Error while cheking up the information"
    });
  }
};


module.exports = {
    verifySignUp : verifySignUp
}
