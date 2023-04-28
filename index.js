const express = require('express');
const path = require('path');
const connectToDatabase = require('./database/db');
const doteenv = require('dotenv');
const routes = require('./routes/routes');
const app = express();

doteenv.config();//função que identifica o arquivo .env
connectToDatabase();

const port = process.env.PORT;
app.set("view engine", "ejs");//FUNÇÃO DO EJS PARA RENDERISAR A PAGINA INDEX.EJS
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:false}));
app.use(routes);//envoco a função que gera as rotas do projeto

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`));