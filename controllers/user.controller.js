//Creating controller for the user

const bcrypt = require("bcryptjs");
const user_model = require("../models/user.model");
const jwt = require("jsonwebtoken");
const tokenConfig = require("../configs/token.config");

exports.signup = async (req, res) => {
  //read the requested body
  const requested_body = req.body;

  //Inserting the data in the mongodb

  const user_Obj = {
    name: requested_body.name,
    email: requested_body.email,
    userId: requested_body.userId,
    UserType: requested_body.UserType,
    password: bcrypt.hashSync(requested_body.password, 8),
  };

  try {
    const user_created = await user_model.create(user_Obj);

    res.status(201).send({
      message: "User Created",
    });
  } catch (err) {
    res.status(500).send({
      message: "Error while creating the user",
    });
  }
};

//adding method for SignIn as well

exports.signIn = async (req, res) => {
    try {
      // Check if the userId is present in the system or not
      const user = await user_model.findOne({ userId: req.body.userId });
  
      if (!user) {
        return res.status(400).send({
          message: "User with the given user Id is not found!",
        });
      }
  
      // Check the password given by the client is correct or not
      const verifyPassword = bcrypt.compareSync(req.body.password, user.password);
  
      if (!verifyPassword) {
        return res.status(400).send({
          message: "Invalid Password!",
        });
      }
  
      // Generate the jwt token
      const token = jwt.sign({ id: user.userId }, tokenConfig.secret, {
        expiresIn: 120,
      });
  
      res.status(200).send({
        name: user.name,
        userId: user.userId,
        email: user.email,
        UserType: user.UserType,
        accessToken: token,
      });
    } catch (error) {
      console.error("Error in sign-in:", error);
      res.status(500).send({
        message: "Internal Server Error",
      });
    }
  };
  

exports.deleteUser = async (req, res) => {
  //
  const userI = req.body.UserType;
  try {
    const userD = await user_model.deleteMany({ UserType: userI });
    return res.status(200).send({
      message: "Given user has been deleted successfully",
    });
  } catch (err) {
    res.status(404).send({
      message: "There is some error while deleting the given user!",
    });
  }
};
