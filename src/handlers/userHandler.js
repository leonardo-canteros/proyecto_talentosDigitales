const { createUserController, getAllUsersController, getOneUserController, getOneUserByIdController, updateOneUserController } = require("../controller/usersController");

const getAllUsersHandler = (req,res) =>{
    const{name} = req.query;
    if (name){
        const response = getOneUserController(name);
        res.status(200).send(response);
    }else{
        const response2 = getAllUsersController();
        res.send(response2);
    }
}; 


// comentario
const getOneUserHandler = (req, res)=>{
    const {id} = req.params;
    const response = getOneUserByIdController(id);
    res.send(`este es un usuario con id: ${id}`);
};

const createUsersHandler = (req, res)=>{
    const {name,username,email} = req.body;
    const response = createUserController(name,username,email);
    res.send(response);
};

const updateUneUserHandler = (req, res) => {
    const {id} = req.params;
    const {name,username,email} = req.body;
    const response = updateOneUserController(id, name, username, email);
    res.send(response);
};

const deletUserhandler = (req, res)=>{
    res.send("eliminar un usuario");
};

 
module.exports = {
    getAllUsersHandler,
    getOneUserHandler ,
    createUsersHandler,
    updateUneUserHandler,
    deletUserhandler,
};





















