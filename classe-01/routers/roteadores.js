const express = require('express');
const {get, getPorId} = require('../controladores/controladores');
const roteador = express();

// GET
roteador.get('/imoveis', get);
roteador.get('/imoveis/:id', getPorId);

module.exports = roteador;