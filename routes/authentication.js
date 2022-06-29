const router = require('express').Router();
// The express.Router() function is used to create a new router object.
//  This function is used when you want to create a new router object in your program to handle requests. 

const User = require('../User');

// router.get('/login', async(req, res) => {
//     const login = {
//         email:req.body.email,
//         password :req.body.password,
//     }
//     console.log(login)
// })


//VALIDATION
const Joi = require('@hapi/joi');

const schema={
    name:Joi.string()
        .min(6)
        .required(),
    email :Joi.string()
        .min(6)
        .required()
        .email(),
    password:Joi.string()
        .min(6)
        .required()
};



router.post('/register' , async (req , res) => {
    console.log("in register")


    //LETS VALIDATE THE DATA BEFORE WE MAKE A USER
    const validation = Joi.validate(req.body , schema);
    res.send(validation);
 
 
 
//     const user= new User({
//         name:req.body.name,
//         email:req.body.email,
//         password :req.body.password,
//         date:req.body.date
//     });
//     try{
//         const savedUser=await user.save();
//         res.send(savedUser);
//     }catch(err){
//         res.status(400).send(err);
//     }
 });


 module.exports = router;