// config/routes.js
const express = require('express');
const router = express.Router();
const usuariosRouter = require('../routes/usuarios');

router.use('/usuarios', usuariosRouter);

module.exports = router;
