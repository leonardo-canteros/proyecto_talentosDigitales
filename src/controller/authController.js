const users = require('../db/dataBase');
const bcrypt = require ('bcryptjs');

const registerController = async (name,username,email,password, role = "user" ) =>{
    const existe = users.some((users) => users.email === email);
    if (existe) {
        throw new Error("ya existe ese usuario");
    } 
    const id = users.length + 1;
    const hashPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = {id, name, username,email,password:hashPassword ,role};
    users.push(nuevoUsuario);
    console.log(nuevoUsuario);
    return nuevoUsuario;
}

const loginController = () =>{
    return ''
}














module.exports= {
    registerController,
    loginController
} 