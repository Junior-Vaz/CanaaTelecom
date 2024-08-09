// Imports
const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

// Rotas de Emails para Contatos
router.post("/send", (req, res) => {

    // Configuração SMTP
    const SMTP = {
        host: 'smtp.titan.email',
        port: 465,
        user: 'contato@canaaenergy.com.br',
        pass: '@Canaafast'  // Certifique-se de usar a senha correta
    };

    // Variáveis dos formulários
    let name = req.body.name;
    let fone = req.body.fone;
    let email = req.body.email;
    let message = req.body.message;

    if (email !== '' && message !== '') {

        // Configurando transporter
        const transporter = nodemailer.createTransport({
            host: SMTP.host,
            port: SMTP.port,
            secure: true,
            auth: {
                user: SMTP.user,
                pass: SMTP.pass
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Função para enviar o email
        async function run() {
            try {
                const mailSend = await transporter.sendMail({
                    subject: 'Quero Contratar',
                    html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                background-color: #f4f4f4;
                            }
                            .email-container {
                                width: 100%;
                                max-width: 600px;
                                margin: 0 auto;
                                background: #ffffff;
                                border-radius: 10px;
                                overflow: hidden;
                            }
                            .email-header {
                                background-image: url('https://i.postimg.cc/85kjmSCp/header.png');
                                background-size: cover;
                                background-position: center;
                                color: #ffffff;
                                text-align: center;
                                padding: 80px 20px;
                            }
                            .email-header h1 {
                                margin: 0;
                                font-size: 28px;
                            }
                            .email-content {
                                padding: 50px;
                                background-color: #f4f4f4;
                            }
                            .email-content p {
                                background-color: #ffffff;
                                border-radius: 10px;
                                font-size: 16px;
                                height: 3rem;
                                padding: 10px;
                                color: #555555;
                                line-height: 1.5;
                                margin: 10px 0;
                            }
                            .email-footer {
                                background-color: #f4f4f4;
                                text-align: center;
                                padding: 10px 20px;
                                color: #777777;
                                font-size: 12px;
                            }
                            @media (max-width: 600px) {
                                .email-container {
                                    width: 100% !important;
                                }
                            }
                        </style>
                    </head>
                    <body>
                        <div class="email-container">
                            <div class="email-header"></div>
                            <div class="email-content">
                                <p><strong>Nome:</strong> ${name}</p>
                                <p><strong>Mensagem:</strong> ${message}</p>
                                <p><strong>Contato:</strong> ${fone}</p>
                            </div>
                            <div class="email-footer">
                                <p>Este é um email gerado automaticamente. Por favor, não responda a este email.</p>
                            </div>
                        </div>
                    </body>
                    </html>
                    `,
                    from: `"${name}" <${SMTP.user}>`,
                    to: 'contato@canaaenergy.com.br'
                });

                console.log('Email enviado:', mailSend);
            } catch (error) {
                console.error('Erro ao enviar email:', error);
            }
        }

        run();

        res.redirect('/GO');

    } else {
        console.log('Email ou mensagem inválidos!');
        // res.render('./erro');
    }
});


// Rotas de Emails para Central de Reclamações
router.post("/contact/send", (req, res) => {

    // Configuração SMTP
    const SMTP = {
        host: 'smtp.titan.email',
        port: 465,
        user: 'contato@canaaenergy.com.br',
        pass: '@Canaafast'  // Certifique-se de usar a senha correta
    };

    // Variáveis dos formulários
    let name = req.body.name;
    let fone = req.body.fone;
    let email = req.body.email;
    let message = req.body.message;

    if (email !== '' && message !== '') {

        // Configurando transporter
        const transporter = nodemailer.createTransport({
            host: SMTP.host,
            port: SMTP.port,
            secure: true,
            auth: {
                user: SMTP.user,
                pass: SMTP.pass
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Função para enviar o email
        async function run() {
            try {
                const mailSend = await transporter.sendMail({
                    subject: 'Quero Contratar',
                    html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                background-color: #f4f4f4;
                            }
                            .email-container {
                                width: 100%;
                                max-width: 600px;
                                margin: 0 auto;
                                background: #ffffff;
                                border-radius: 10px;
                                overflow: hidden;
                            }
                            .email-header {
                                background-image: url('https://i.postimg.cc/85kjmSCp/header.png');
                                background-size: cover;
                                background-position: center;
                                color: #ffffff;
                                text-align: center;
                                padding: 80px 20px;
                            }
                            .email-header h1 {
                                margin: 0;
                                font-size: 28px;
                            }
                            .email-content {
                                padding: 50px;
                                background-color: #f4f4f4;
                            }
                            .email-content p {
                                background-color: #ffffff;
                                border-radius: 10px;
                                font-size: 16px;
                                height: 3rem;
                                padding: 10px;
                                color: #555555;
                                line-height: 1.5;
                                margin: 10px 0;
                            }
                            .email-footer {
                                background-color: #f4f4f4;
                                text-align: center;
                                padding: 10px 20px;
                                color: #777777;
                                font-size: 12px;
                            }
                            @media (max-width: 600px) {
                                .email-container {
                                    width: 100% !important;
                                }
                            }
                        </style>
                    </head>
                    <body>
                        <div class="email-container">
                            <div class="email-header"></div>
                            <div class="email-content">
                                <p><strong>Nome:</strong> ${name}</p>
                                <p><strong>Mensagem:</strong> ${message}</p>
                                <p><strong>Contato:</strong> ${fone}</p>
                            </div>
                            <div class="email-footer">
                                <p>Este é um email gerado automaticamente. Por favor, não responda a este email.</p>
                            </div>
                        </div>
                    </body>
                    </html>
                    `,
                    from: `"${name}" <${SMTP.user}>`,
                    to: 'contato@canaaenergy.com.br'
                });

                console.log('Email enviado:', mailSend);
            } catch (error) {
                console.error('Erro ao enviar email:', error);
            }
        }

        run();

        res.redirect('/GO');

    } else {
        console.log('Email ou mensagem inválidos!');
        // res.render('./erro');
    }
});

router.get("/central", (req, res) => {
    res.render("forms/central");
});

// Rotas de Emails para Suporte técnico
router.post("/suporte/send", (req, res) => {

    // Configuração SMTP
    const SMTP = {
        host: 'smtp.titan.email',
        port: 465,
        user: 'contato@canaaenergy.com.br',
        pass: '@Canaafast'  // Certifique-se de usar a senha correta
    };

    // Variáveis dos formulários
    let name = req.body.name;
    let fone = req.body.fone;
    let email = req.body.email;
    let message = req.body.message;

    if (email !== '' && message !== '') {

        // Configurando transporter
        const transporter = nodemailer.createTransport({
            host: SMTP.host,
            port: SMTP.port,
            secure: true,
            auth: {
                user: SMTP.user,
                pass: SMTP.pass
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Função para enviar o email
        async function run() {
            try {
                const mailSend = await transporter.sendMail({
                    subject: 'Quero Contratar',
                    html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                background-color: #f4f4f4;
                            }
                            .email-container {
                                width: 100%;
                                max-width: 600px;
                                margin: 0 auto;
                                background: #ffffff;
                                border-radius: 10px;
                                overflow: hidden;
                            }
                            .email-header {
                                background-image: url('https://i.postimg.cc/85kjmSCp/header.png');
                                background-size: cover;
                                background-position: center;
                                color: #ffffff;
                                text-align: center;
                                padding: 80px 20px;
                            }
                            .email-header h1 {
                                margin: 0;
                                font-size: 28px;
                            }
                            .email-content {
                                padding: 50px;
                                background-color: #f4f4f4;
                            }
                            .email-content p {
                                background-color: #ffffff;
                                border-radius: 10px;
                                font-size: 16px;
                                height: 3rem;
                                padding: 10px;
                                color: #555555;
                                line-height: 1.5;
                                margin: 10px 0;
                            }
                            .email-footer {
                                background-color: #f4f4f4;
                                text-align: center;
                                padding: 10px 20px;
                                color: #777777;
                                font-size: 12px;
                            }
                            @media (max-width: 600px) {
                                .email-container {
                                    width: 100% !important;
                                }
                            }
                        </style>
                    </head>
                    <body>
                        <div class="email-container">
                            <div class="email-header"></div>
                            <div class="email-content">
                                <p><strong>Nome:</strong> ${name}</p>
                                <p><strong>Mensagem:</strong> ${message}</p>
                                <p><strong>Contato:</strong> ${fone}</p>
                            </div>
                            <div class="email-footer">
                                <p>Este é um email gerado automaticamente. Por favor, não responda a este email.</p>
                            </div>
                        </div>
                    </body>
                    </html>
                    `,
                    from: `"${name}" <${SMTP.user}>`,
                    to: 'contato@canaaenergy.com.br'
                });

                console.log('Email enviado:', mailSend);
            } catch (error) {
                console.error('Erro ao enviar email:', error);
            }
        }

        run();

        res.redirect('/GO');

    } else {
        console.log('Email ou mensagem inválidos!');
        // res.render('./erro');
    }
});

router.get("/suporte", (req, res) => {
    res.render("forms/suporte");
});


// Rotas de Emails para o SAC
router.post("/sac/send", (req, res) => {

    // Configuração SMTP
    const SMTP = {
        host: 'smtp.titan.email',
        port: 465,
        user: 'contato@canaaenergy.com.br',
        pass: '@Canaafast'  // Certifique-se de usar a senha correta
    };

    // Variáveis dos formulários
    let name = req.body.name;
    let fone = req.body.fone;
    let email = req.body.email;
    let message = req.body.message;

    if (email !== '' && message !== '') {

        // Configurando transporter
        const transporter = nodemailer.createTransport({
            host: SMTP.host,
            port: SMTP.port,
            secure: true,
            auth: {
                user: SMTP.user,
                pass: SMTP.pass
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Função para enviar o email
        async function run() {
            try {
                const mailSend = await transporter.sendMail({
                    subject: 'Quero Contratar',
                    html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                background-color: #f4f4f4;
                            }
                            .email-container {
                                width: 100%;
                                max-width: 600px;
                                margin: 0 auto;
                                background: #ffffff;
                                border-radius: 10px;
                                overflow: hidden;
                            }
                            .email-header {
                                background-image: url('https://i.postimg.cc/85kjmSCp/header.png');
                                background-size: cover;
                                background-position: center;
                                color: #ffffff;
                                text-align: center;
                                padding: 80px 20px;
                            }
                            .email-header h1 {
                                margin: 0;
                                font-size: 28px;
                            }
                            .email-content {
                                padding: 50px;
                                background-color: #f4f4f4;
                            }
                            .email-content p {
                                background-color: #ffffff;
                                border-radius: 10px;
                                font-size: 16px;
                                height: 3rem;
                                padding: 10px;
                                color: #555555;
                                line-height: 1.5;
                                margin: 10px 0;
                            }
                            .email-footer {
                                background-color: #f4f4f4;
                                text-align: center;
                                padding: 10px 20px;
                                color: #777777;
                                font-size: 12px;
                            }
                            @media (max-width: 600px) {
                                .email-container {
                                    width: 100% !important;
                                }
                            }
                        </style>
                    </head>
                    <body>
                        <div class="email-container">
                            <div class="email-header"></div>
                            <div class="email-content">
                                <p><strong>Nome:</strong> ${name}</p>
                                <p><strong>Mensagem:</strong> ${message}</p>
                                <p><strong>Contato:</strong> ${fone}</p>
                            </div>
                            <div class="email-footer">
                                <p>Este é um email gerado automaticamente. Por favor, não responda a este email.</p>
                            </div>
                        </div>
                    </body>
                    </html>
                    `,
                    from: `"${name}" <${SMTP.user}>`,
                    to: 'contato@canaaenergy.com.br'
                });

                console.log('Email enviado:', mailSend);
            } catch (error) {
                console.error('Erro ao enviar email:', error);
            }
        }

        run();

        res.redirect('/GO');

    } else {
        console.log('Email ou mensagem inválidos!');
        // res.render('./erro');
    }
});

router.get("/sac", (req, res) => {
    res.render("forms/sac");
});


// Rotas de Emails para Trabalhe Conosco
router.post("/trabalhe/send", (req, res) => {

    // Configuração SMTP
    const SMTP = {
        host: 'smtp.titan.email',
        port: 465,
        user: 'contato@canaaenergy.com.br',
        pass: '@Canaafast'  // Certifique-se de usar a senha correta
    };

    // Variáveis dos formulários
    let name = req.body.name;
    let fone = req.body.fone;
    let email = req.body.email;
    let message = req.body.message;

    if (email !== '' && message !== '') {

        // Configurando transporter
        const transporter = nodemailer.createTransport({
            host: SMTP.host,
            port: SMTP.port,
            secure: true,
            auth: {
                user: SMTP.user,
                pass: SMTP.pass
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Função para enviar o email
        async function run() {
            try {
                const mailSend = await transporter.sendMail({
                    subject: 'Quero Contratar',
                    html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                background-color: #f4f4f4;
                            }
                            .email-container {
                                width: 100%;
                                max-width: 600px;
                                margin: 0 auto;
                                background: #ffffff;
                                border-radius: 10px;
                                overflow: hidden;
                            }
                            .email-header {
                                background-image: url('https://i.postimg.cc/85kjmSCp/header.png');
                                background-size: cover;
                                background-position: center;
                                color: #ffffff;
                                text-align: center;
                                padding: 80px 20px;
                            }
                            .email-header h1 {
                                margin: 0;
                                font-size: 28px;
                            }
                            .email-content {
                                padding: 50px;
                                background-color: #f4f4f4;
                            }
                            .email-content p {
                                background-color: #ffffff;
                                border-radius: 10px;
                                font-size: 16px;
                                height: 3rem;
                                padding: 10px;
                                color: #555555;
                                line-height: 1.5;
                                margin: 10px 0;
                            }
                            .email-footer {
                                background-color: #f4f4f4;
                                text-align: center;
                                padding: 10px 20px;
                                color: #777777;
                                font-size: 12px;
                            }
                            @media (max-width: 600px) {
                                .email-container {
                                    width: 100% !important;
                                }
                            }
                        </style>
                    </head>
                    <body>
                        <div class="email-container">
                            <div class="email-header"></div>
                            <div class="email-content">
                                <p><strong>Nome:</strong> ${name}</p>
                                <p><strong>Mensagem:</strong> ${message}</p>
                                <p><strong>Contato:</strong> ${fone}</p>
                            </div>
                            <div class="email-footer">
                                <p>Este é um email gerado automaticamente. Por favor, não responda a este email.</p>
                            </div>
                        </div>
                    </body>
                    </html>
                    `,
                    from: `"${name}" <${SMTP.user}>`,
                    to: 'contato@canaaenergy.com.br'
                });

                console.log('Email enviado:', mailSend);
            } catch (error) {
                console.error('Erro ao enviar email:', error);
            }
        }

        run();

        res.redirect('/GO');

    } else {
        console.log('Email ou mensagem inválidos!');
        // res.render('./erro');
    }
});

router.get("/trabalhe", (req, res) => {
    res.render("forms/trabalhe");
});







module.exports = router;
