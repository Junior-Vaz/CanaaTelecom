// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do Express
const routes = require('./config/routes');
app.use('/', routes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
