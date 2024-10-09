const {Router} = require('express');
const userRouter = require('./userRoutes');
const producRouter = require('./producRoutes');
const authRouter = require('./authRouter');
const MainRouter = Router();


/*MainRouter.get("/", (req,res) =>{
    res.send("hola mundo");
});*/


//auth
MainRouter.use('/auth', authRouter);


//usuarios
MainRouter.use('/usuario', userRouter);


//productos
MainRouter.use('/productos',producRouter);




module.exports = MainRouter;

