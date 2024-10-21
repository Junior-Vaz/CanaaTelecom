// Importes
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs')
const kleur = require('kleur');

// Middleware CORS
app.use(cors());

// Importando Controllers
const formsController = require("./Forms/FormsController");

// Carregando view engine
app.set('view engine', 'ejs');

// Arquivos estáticos - img/css/js ...
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Carregando controllers
app.use("/", formsController);

// Rotas das páginas principais
app.get("/", (req, res) => {
    res.render("index");
    res.status(200)
});

app.get("/DF", (req, res) => {
    res.render("DF");
    res.status(200);
});

app.get("/GO", (req, res) => {
    res.render("GO");
    res.status(200)
});

app.get("/dedicado", (req, res) => {
    res.render("dedicado");
    res.status(200)
});
app.get("/admin", (req, res) => {
    res.render("admin/index")
    res.status(200)
})

//Gerando site-maps --------------------------------- *
// URLs para canaatelecom.com.br
const urlsCanaatelecom = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/DF', changefreq: 'weekly', priority: 0.8 },
    { url: '/dedicado', changefreq: 'weekly', priority: 0.8 },
];

// URLs para planos-canaatelecom.com
const urlsPlanosCanaatelecom = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/GO', changefreq: 'weekly', priority: 0.8 },
    { url: '/sac', changefreq: 'weekly', priority: 0.7 },
    { url: '/suporte', changefreq: 'weekly', priority: 0.8 },
    { url: '/trabalhe', changefreq: 'weekly', priority: 0.7 },
    { url: '/dedicado', changefreq: 'weekly', priority: 0.8 },
];

// Função para gerar sitemap para canaatelecom.com.br
async function generateSitemapCanaatelecom() {
    const sitemap = new SitemapStream({ hostname: 'https://www.canaatelecom.com.br' });

    // Grava o sitemap no arquivo sitemap.xml
    const writeStream = createWriteStream('./public/sitemap-canaatelecom.xml');
    sitemap.pipe(writeStream);

    // Adiciona as URLs
    urlsCanaatelecom.forEach((url) => sitemap.write(url));

    // Finaliza o sitemap
    sitemap.end();
    await streamToPromise(sitemap);
    console.log(kleur.yellow().bgBlue(`Sitemap ${kleur.green().bgYellow().bold('canaatelecom.com.br')} gerado com sucesso!`));
}

// Função para gerar sitemap para planos-canaatelecom.com
async function generateSitemapPlanosCanaatelecom() {
    const sitemap = new SitemapStream({ hostname: 'https://www.planos-canaatelecom.com.br' });

    // Grava o sitemap no arquivo sitemap.xml
    const writeStream = createWriteStream('./public/sitemap-planos-canaatelecom.xml');
    sitemap.pipe(writeStream);

    // Adiciona as URLs
    urlsPlanosCanaatelecom.forEach((url) => sitemap.write(url));

    // Finaliza o sitemap
    sitemap.end();
    await streamToPromise(sitemap);
    console.log(kleur.yellow().bgBlue(`Sitemap ${kleur.green().bgYellow().bold('planos-canaatelecom.com')} gerado com sucesso!`));

}

// Gera os dois sitemaps
generateSitemapCanaatelecom();
generateSitemapPlanosCanaatelecom();


// Iniciar o servidor
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(kleur.black().bgGreen().bold(`Servidor rodando na Porta ${kleur.bgYellow().green(PORT)}`))
})
