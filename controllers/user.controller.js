//Creating controller for the user 

const bcrypt = require("bcryptjs");
const user_model = require("../models/user.model");

exports.signup = async(req,res) =>{
    //read the requested body
    const requested_body = req.body;

    //Inserting the data in the mongodb

    const user_Obj = {
        name : requested_body.name,
        email : requested_body.email,
        userId : requested_body.userId,
        UserType : requested_body.UserType,
        password : bcrypt.hashSync(requested_body.password,8)
    }

    try{
        const user_created = await user_model.create(user_Obj);

        res.status(201).send({
            message : "User Created"
        })
    }catch(err){
        res.status(500).send({
            message : "Error while creating the user"
        })
    }

    

    


}