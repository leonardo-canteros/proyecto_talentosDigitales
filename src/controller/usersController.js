const {users} = require('../db/dataBase');
const bcrypt = require ('bcryptjs');



const createUserController = async (name, username,email,password,role) =>{
    const id = users.length + 1;
    const hashPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = {id, name, username,email,password:hashPassword ,role};
    users.push(nuevoUsuario);
    console.log(nuevoUsuario);
    return nuevoUsuario;
};

const getAllUsersController = () =>{
    if(!users.length){throw new Error("no hay ususarios")};
    console.log(users);
    return users;
};

const getOneUserController = (name) =>{
   const userByName = users.filter((user) => user.name === name);
   if(!name ){throw new Error("no se encotro al usuario") }
   console.log(userByName);
   return userByName;
};

const getOneUserByIdController = (id) =>{
    const userById = users.find((user) => user.id ===  Number(id) );
    if(!id)throw new Error("no se encotro al usuario");
    console.log(userById);
    return userById;
};


const updateOneUserController = (id , name, username, email) => {
    const newUser = (name, username, email); 
    const userUpdate = users.find((user) => user.id ===  Number(id) );
    if( !id || !name ||  !username || !email)throw new Error("faltan datos");

    if(userUpdate){
        Object.assign(userUpdate, newUser);
    }

    console.log(userUpdate);
    return userUpdate;
};

const deleteUserController = (id) => {
    const index = users.findIndex((user) => user.id ===  Number(id) );
    if(!id)throw new Error("ingrese id del usuario a eliminar");
    let userDeleted = users.splice(index, 1);
    
    console.log(userDeleted);
}




module.exports = {
    createUserController,
    getAllUsersController,
    getOneUserController,
    getOneUserByIdController,
    updateOneUserController,
    deleteUserController
};












