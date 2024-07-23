const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('canaatelecom','root','0512',{

    host: 'localhost',
    dialect: 'mysql',
    logging: false //Desativar logs de do Sequelize

})


module.exports = sequelize;