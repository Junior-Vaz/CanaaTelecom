//criando router - controller
const express = require("express");
const router = express.Router();
const Category = require("../categories/category");
const Articles = require("./Articles");
const Slugify = require("slugify");
//const { where } = require("sequelize");
const adminAuth = require("../middlewares/adminAuth") //importando meu midleware



//rotas

router.get("/articles/page/:num", (req, res)=>{
    /*
    //buscando parametros
    var page = req.params.num;
    var offset = 0;

    //verificando se e um numero 
    if(isNaN(page) || page == 0 || page == 1){
        offset = 0;
    }else{
        offset = (parseInt(page) - 1) * 4;
    }

    //select de paginação
    Articles.findAndCountAll({
        limit: 4,
        offset: offset,
        order: [['id', 'DESC']]
    }).then( articles => {

        var next;
        if(offset + 4 >= articles.count){
            next = false;
        }else{
            next = true;
        }

        var result = { 
            next: next,
            articles: articles,
            page: parseInt(page)
        }
        
        Category.findAll().then(categories => {

            res.render("admin/articles/page", {result: result, categories: categories, offset: offset})

        });
      

    })
        */

})



module.exports = router;