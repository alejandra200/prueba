//Ejecutamos el servidor
const app= require("./config/server");
const connection= require("./config/db");

require("./app/routes/login_registro")(app);

//El server debe ser escuchado en el puerto.

app.listen(app.get("port"), ()=>{
    console.log("Servidor en el puerto:", app.get("port"))
});


