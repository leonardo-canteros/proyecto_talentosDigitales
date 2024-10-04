const { createUserController, getAllUsersController, getOneUserController } = require("../controller/usersControler");

const getAllUsersHandler = (req,res) =>{
    const{id} = req.query;
    if (id){
        const response = getOneUserController(id);
        res.send(`el esusarios es ${id}`);
    }else{
        const response = getAllUsersController();
        console.log(response);
        res.send(response);
    }
}; 
// comentario
const getOneUserHandler = (req, res)=>{
    const {id} = req.params;
    res.send(`este es un usuario con id: ${id}`);
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





















