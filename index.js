const server = require ("./src/server");
require("dotenv");


const PORT = 6001 ;

server.listen(PORT, console.log( `server listend in port ${PORT} `));