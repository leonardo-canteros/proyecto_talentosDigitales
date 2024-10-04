const users = require('../db/dataBase');

  
const createUserController = (name, username,email) =>{
    const id = users.length + 1
    
    const nuevoUsuario = {
        id, name, username,email
    };
    users.push(nuevoUsuario);
    return nuevoUsuario;
};

const getAllUsersController = () =>{
    return users;
};

const getOneUserController = (id) =>{
   const userById = users.filter((user) => user.id === id);
   console.log(userById);
};




module.exports = {
    createUserController,
    getAllUsersController,
    getOneUserController
};












