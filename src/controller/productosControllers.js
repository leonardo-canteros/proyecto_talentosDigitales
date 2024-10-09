const {products} = require('../db/dataBase');


const createProductController = (name, precio, stock ) =>{
    const id = products.length + 1;
    const nuevoProducto = {id, name, precio, stock };
    products.push(nuevoProducto);
    console.log(nuevoProducto);
    return nuevoProducto;
};

const getAllProductController = () =>{
    console.log(products);
    return products;
};

const getOneProductController = (name) =>{
   const productsByName = products.filter((product) => product.name === name);
   //if(!name ){throw new Error("no se encotro el producto") }
   console.log(productsByName);
   return productsByName;
};

const getProductByIdController = (id) =>{
    const productById = products.find((product) => product.id ===  Number(id) );
    //if(!id)throw new Error("no se encotro al usuario");
    console.log(productById);
    return productById;
};


const updateProductController = (id, name, precio, stock ) => {
    const newProduct = (id, name, precio, stock ); 
    const productUpdate = products.find((user) => user.id ===  Number(id) );
   // if( !id || !name ||  !username || !email)throw new Error("faltan datos");

    if(productUpdate){
        Object.assign(productUpdate, newProduct);
    }

    console.log(productUpdate);
    return productUpdate;
};

const deleteProductController = (id) => {
    const index = products.findIndex((products) => products.id ===  Number(id) );
   // if(!id)throw new Error("ingrese id del usuario a eliminar");
    let productDeleted = products.splice(index, 1);
    
    console.log(productDeleted);
}




module.exports = {
    createProductController,
    getAllProductController,
    getOneProductController,
    getProductByIdController,
    updateProductController,
    deleteProductController
};












