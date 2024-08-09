// Importes
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const session = require("express-session");
const cors = require('cors');
const fs = require('fs');

const { createServer } = require('http'); // Adicionado
const { Server } = require('socket.io'); // Adicionado

// Middleware CORS
app.use(cors());

// Importando Controllers
const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');
const usersController = require("./user/UsersController");
const formsController = require("./Forms/FormsController");
const adminController = require("./admin/AdminController");

// Carregando view engine
app.set('view engine', 'ejs');

// Session
app.use(session({
    secret: "qualquercoisa",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3000000 }
}));

// Arquivos estáticos - img/css/js ...
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conexão com o banco de dados
connection.authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    })
    .catch((err) => {
        console.log(err);
});

// Carregando controllers
app.use("/", categoriesController);
app.use("/", articlesController);
app.use("/", usersController);
app.use("/", formsController);
app.use("/", adminController);

// Rotas das páginas principais
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/DF", (req, res) => {
    res.render("DF");
});

app.get("/GO", (req, res) => {
    res.render("GO");
});

// Criando servidor HTTP e Socket.IO
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on('chat message', (msg) => {
        console.log(`Message: ${msg}`);
        io.emit('chat message', msg); // Envie a mensagem para todos os clientes
    });

    socket.on('disconnect', () => {
        console.log(`Socket disconnected: ${socket.id}`);
    });
});

// Iniciar o servidor
const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
