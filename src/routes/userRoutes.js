const {Router} = require('express');
const { getAllUsersHandler, getOneUserHandler, createUsersHandler, putUneUserHandler, deletUserhandler } = require('../handlers/userHandler');
const userRouter = Router();


//usuarios
userRouter.get("/", getAllUsersHandler);

userRouter.get("/:id", getOneUserHandler);

userRouter.post("/", createUsersHandler);

userRouter.put("/:id", putUneUserHandler);

userRouter.delete("/:id", deletUserhandler);

module.exports = userRouter;