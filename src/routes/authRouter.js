const {Router} = require ('express');
const {registerHandler, loginhandler } = require ("../handlers/authHandler");

const authRouter = Router();


authRouter.post("/register", registerHandler);

authRouter.post("/login", loginhandler);


module.exports =authRouter;









