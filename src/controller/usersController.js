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
    console.log(users);
    return users;
};

const getOneUserController = (name) =>{
   const userByName = users.filter((user) => user.name === name);
   console.log(userByName);
   return userByName;
};

const getOneUserByIdController = (id) =>{
    const userById = users.find((user) => user.id ===  Number(id) );
    console.log(userById);
    return userById;
}

const updateOneUserController = (id , name, username, email) => {
    const newUser = (name, username, email); 
    const userUpdate = users.find((user) => user.id ===  Number(id) );

    if(userUpdate){
        Object.assign(userUpdate, newUser)
    }

    console.log(userUpdate);
    return userUpdate;
}




module.exports = {
    createUserController,
    getAllUsersController,
    getOneUserController,
    getOneUserByIdController,
    updateOneUserController
};












