require('dotenv').config();
const express = require('express');
const path = require('path');
const connectToDatabase = require('./database/db');
const routes = require('./routes/routes');
const app = express();
const doteenv = require('dotenv');
connectToDatabase();

const port = process.env.PORT;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:false}));
app.use(routes);

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/`));