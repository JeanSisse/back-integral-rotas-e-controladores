const express = require('express');
const {getAlunos, getAlunoPorId, criarAluno, deletarAluno} = require('./controladores/controladores');
const roteador = express();

// GET
roteador.get('/alunos', getAlunos);
roteador.get('/alunos/:id', getAlunoPorId);

// POST
roteador.post('/alunos', criarAluno);

// DELETE
roteador.delete('/alunos/:id', deletarAluno);
module.exports = roteador;