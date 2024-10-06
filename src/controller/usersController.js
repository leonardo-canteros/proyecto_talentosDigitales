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


//preguntar porque no funciona con id ???
const getOneUserController = (name) =>{
   const userByName = users.filter((user) => user.name === name);
   console.log(userByName);
   return userByName;
};

const getOneUserByIdController = (id) =>{
    const userById = user.find(user => user.id == id );
    console.log(userById)
}


module.exports = {
    createUserController,
    getAllUsersController,
    getOneUserController,
    getOneUserByIdController
};












