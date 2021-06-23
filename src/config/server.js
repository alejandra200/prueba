//Traer modulos

const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const session = require("express-session");


//Inicializaciòn del servidor

const app = express(); 

//Configuraciones:
//Configurar puerto
app.set("port", process.env.PORT || 3000);

//Configurar el gestor de plantillas
app.set("view engine","ejs");

//Configurar la ruta donde estan alojadas las vistas
app.set("vies", path.join(__dirname, "../app/views"));

//Middlewares(para recibir facilmente la informaciòn de los formularios)
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Configurar dotenv(variables de entorno)
dotenv.config({path: path.join(__dirname, "../env/.env")});

//Configurar la ruta donde estan alojados los elementos del css (public)
app.use("/resources", express.static(path.join(__dirname,"../public")));

//Configurar el manejo de sesiones dentro de la aplicaciòn
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}))

module.exports = app;
