function adminAuth(req, res, next){
    if(req.session.user != undefined){ //se a sessão exitir
        next(); //continuar indo ate a rota
    }else{
        res.redirect("/login"); //se não volta a pagina de login
    }
}

module.exports = adminAuth;