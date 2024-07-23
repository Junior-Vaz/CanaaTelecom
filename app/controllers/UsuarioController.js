// app/controllers/UsuarioController.js
const express = require('express');
const Usuario = require('../models/Usuarios');

const router = express.Router();

// Rota para listar usuários
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.render('usuarios/listar', { usuarios });
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        res.status(500).send('Erro ao listar usuários');
    }
});

module.exports = router;
