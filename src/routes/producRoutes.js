const {Router} = require('express');
const producRouter = Router();


//productos
producRouter.get("/", (req,res) =>{
    res.send("los productos");
});

producRouter.get("/:id", (req,res) =>{
    res.send("el producto es");
});

producRouter.post("/", (req,res) =>{
    res.send("crear un producto");
});

producRouter.put("/:id", (req,res) =>{
    res.send("editar un uproduco");
});

producRouter.delete("/:id", (req,res) =>{
    res.send("eliminar producto");
});

module.exports = producRouter;
