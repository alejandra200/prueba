//modulo para acceder a base de datos utilizando ‘mysql

const mysql = require("mysql");
const connection= mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE
});

//Vamos a comprobar si la conexiòn fue exitosa o no,adicionalmente,exportamos el modulo conexiòn.
connection.connect((err)=>{
    if(err){
        console.log("El error de conexiòn a BD es:"+ err)
        return;
    }
    console.log("Conectado exitosamente a la BD");
});

module.exports=connection;

