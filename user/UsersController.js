//importando express
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")
const User = require("./User");

//Rotas
router.get("/admin/users", (req, res)=>{

    User.findAll().then((user)=>{
        res.render("admin/users/users",{user:user})
    })

})

router.get("/admin/users/create", (req,res) =>{

    res.render("admin/users/create")

})

router.post("/users/create",(req, res)=>{

    let email = req.body.email;
    let password = req.body.password;

    User.findOne({
        where: {email: email}
    }).then(user => {

        if(user == undefined){

              //Como trabalhar e salvar suas senhas para o banco de forma correta com Hach
    // instale o Bcrypt - npm install bcryptjs

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password,salt);

    
    User.create({
        email: email,
        password: hash

    }).then(()=>{
        res.redirect("/")
    })
      
        }else{

            res.redirect("/admin/users/create")

        }
    }) 
})



router.get("/login", (req,res)=>{
   res.render("admin/users/login")
})

router.post("/authenticate", (req,res)=>{
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({
        where: {email: email}
    }).then(user => {

        if(user != undefined){ //se existe um usuário com esse e-mail

            //validar senha
            var correct = bcrypt.compareSync(password,user.password)
            
            if(correct){
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.redirect("/admin/articles")

            }else{
                res.redirect("/login")
            }

        }else{
            res.redirect("/login")
        }

    })

})
router.get("/logout", (req,res)=>{
    req.session.user = undefined
    res.redirect("/")
})

//export router p/ index
module.exports = router