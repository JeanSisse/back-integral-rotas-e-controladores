const express = require("express");
const app = express();
const roteador = require('./roteador');
const {verificarSenha} = require('./intermediarios');


app.use(express.json());

//Checkin de senha
app.use(verificarSenha);

//Acesso ao roteadores
app.use(roteador);

app.listen(8000);