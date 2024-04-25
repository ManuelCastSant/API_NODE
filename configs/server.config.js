const express = require("express");
const cors = require("cors");



const app = express();


//Instacia para iniciar el servidor
const iniciarServicio = (PORT)=>{
    app.use(express.json());
    app.use(cors());//Conectarse desde cualquier ip


app.listen(PORT,()=>console.log(`servidor corriendo en puerto http:/localhost:${PORT}`));

return app;
}




module.exports = {iniciarServicio}