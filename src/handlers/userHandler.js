const { createUserController, getAllUsersController, getOneUserController, getOneUserById, getOneUserByIdController } = require("../controller/usersController");

const getAllUsersHandler = (req,res) =>{
    const{name} = req.query;
    if (name){
        const response = getOneUserController(name);
        res.status(200).send(response);
    }else{
        const response2 = getAllUsersController();
        console.log(response2);
        res.send(response2);
    }
}; 


// comentario
const getOneUserHandler = (req, res)=>{
    const {id} = req.params;
    const response = getOneUserByIdController(id);
    res.send(`este es un usuario con id: ${response}`);
};

const createUsersHandler = (req, res)=>{
    const {name,username,email} = req.body;
    const response = createUserController(name,username,email);
    res.send(response);
};

const putUneUserHandler = (req, res) => {
    res.send("modificar un usuario");
};

const deletUserhandler = (req, res)=>{
    res.send("eliminar un usuario");
};

 
module.exports = {
    getAllUsersHandler,
    getOneUserHandler ,
    createUsersHandler,
    putUneUserHandler,
    deletUserhandler,
};





















