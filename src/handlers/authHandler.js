const {registerController} = require("../controller/authController");
const joi = require("joi");

const userModel = joi.object({
    name: joi.string().min(3).required(),
    username:joi.string().min(5).required(),
    email : joi.string().email().required(),
    password: joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
    role : joi.string().valid('admin','user')
})

const registerHandler = async (req, res) =>{
    const {error} = userModel.validate(req.body);
    if(error)res.status(400).send(error.details[0].message);
    try {
        const {name,username,email, password, role} = req.body;
        const response = await registerController(name,username,email,password, role);
        res.send(response);
    } catch (error) {
        res.status(400).send({Error : error.message});
    }
    
    //res.send("registro");
}


const loginhandler = (req,res)=>{
    res.send('loguin');
}


module.exports = {
    registerHandler,
    loginhandler
}