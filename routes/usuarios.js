// routes/usuarios.js
const express = require('express');
const router = express.Router();
const UsuarioController = require('../app/controllers/UsuarioController');

// Rota para listar usuários
router.get('/', UsuarioController);

module.exports = router;
