const {Router} = require('express');
const { getAllUsersHandler, getOneUserHandler, createUsersHandler, updateUneUserHandler, deletUserhandler} = require('../handlers/userHandler');
const userRouter = Router();


//usuarios
userRouter.get("/", getAllUsersHandler);

userRouter.get("/:id", getOneUserHandler);

userRouter.post("/", createUsersHandler);

userRouter.put("/:id", updateUneUserHandler);

userRouter.delete("/:id", deletUserhandler);

module.exports = userRouter;