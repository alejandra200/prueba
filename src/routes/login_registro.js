//Configuración de las rutas

const { createConnection } = require("mysql");
const app= require("../../config/server");

module.exports= app => {
    app.get("/", (req,res)=>{
        res.render("../views/index.ejs");
    })
    app.get("/login",(req,res)=>{
        res.render("../views/login.ejs");
    })

    app.get("/register",(req,res)=>{
        res.render("../views/register.ejs");
    })
    app.get("/logout",(req,res)=>{
        req.session.destroy(()=>{
            res.redirect("/");
    })
})


    //Solicitudes POST en el registro:
    app.post("/register", async(req,res)=>{  
        const {user,name,rol,pass}=req.body;
        console.log(req.body);
        let passwordHaash=await bcryptjs.hash(pass,8);
        createConnection.query("INSER INTO users SET ?",{
            user:user,
            name:name,
            rol:rol,
            pass:passwordHaash
        },async(error,results)=>{ 
            if(error){
                console.log(error);
            }else{
                res.render("../views/register.ejs",{
                alert:true,
                alerTitle:"Registration",
                alertMessage:"Successful Registration",
                alertIcon:"success",
                showConfirmButton:false,
                timer:1500,
                ruta:" "
            });
        }
   
    
    })
})



//Solicitud POST de login(autenticaciòn)
app.post("/auth",async(req,res)=>{
    const {user,pass}=req.body;
    let passwordHaash=await bcryptjs.hash(pass,8);

    if(user && pass){
        connection.query("SELECT * FROM users WHERE user =?",[user],async(err,results)=>{
           
            if(results.length===0 || !(await bcryptjs.compare(pass,results[0].pass))){
                res.render("../views/login.ejs",{
                    //Configuracion de sweetalert2 para error
                    alert:true,
                    alerTitle:"Error",
                    alertMessage:"Usuario y/o password icorrectas",
                    alertIcon:"error",
                    showConfirmButton:true,
                    timer:false,
                    ruta:"login"
                });
            }else{
                req.session.loggedin=true;
                req.session.name=results[0].name;
                res.render("../views/login.ejs",{
                    //Configuracion de sweetalert2 para login correcto
                    alert:true,
                    alerTitle:"Conexion exitosa",
                    alertMessage:"Login correcto",
                    alertIcon:"Success",
                    showConfirmButton:false,
                    timer:1500,
                    ruta:" "
                

            
            });
            }

        })
    }
})

}