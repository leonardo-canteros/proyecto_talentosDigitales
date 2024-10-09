const { createUserController, getAllUsersController, getOneUserController, getOneUserByIdController, updateOneUserController, deleteUserController } = require("../controller/usersController");

const joi = require("joi");
const userModel = joi.object({
    name: joi.string().min(3).required(),
    username:joi.string().min(5).required(),
    email : joi.string().email().required(),
    password: joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),
    role : joi.string().valid('admin','user').required()
})

const getAllUsersHandler = (req,res) =>{
   try {
    const{name} = req.query;
    if (name){
        const response = getOneUserController(name);
        res.status(200).send(response);
    }else{
        const response2 = getAllUsersController();
        res.send(response2);
    }
   } catch (error) {
        res.status(400).send({Error : error.message});
   }
    
}; 

const getOneUserHandler = (req, res)=>{
    try {
        const {id} = req.params;
        const response = getOneUserByIdController(id);
        res.send(response);
    } catch (error) {
        res.status(400).send({Error : error.message});
    }
    
};

const createUsersHandler = async (req, res)=>{
    const {error} = userModel.validate(req.body);
    if(error)res.status(400).send(error.details[0].message);
    try {
        const {name,username,email, password, role} = req.body;
        const response = await createUserController(name,username,email,password,role);
        res.send(response);
    } catch (error) {
        res.status(400).send({Error : error.message});
    }
};

const updateUneUserHandler = (req, res) => {
    try {
        const {id} = req.params;
        const {name,username,email} = req.body;
        const response = updateOneUserController(id, name, username, email);
        res.send(response);
    } catch (error) {
        res.status(400).send({Error : error.message});
    }
   
};

const deletUserhandler = (req, res)=>{
   try {
        const {id} = req.params;
        const response = deleteUserController(id);
        res.send(response);
   } catch (error) {
        res.status(400).send({Error : error.message});
   }
};

 
module.exports = {
    getAllUsersHandler,
    getOneUserHandler ,
    createUsersHandler,
    updateUneUserHandler,
    deletUserhandler,
};





















