const {Router} = require('express');
const userRouter = require('./userRoutes');
const producRouter = require('./producRoutes');
const MainRouter = Router();


MainRouter.get("/", (req,res) =>{
    res.send("hola mundo");
});

//usuarios
MainRouter.use('/usuario', userRouter);


//productos
MainRouter.use('/productos',producRouter);




module.exports = MainRouter;

