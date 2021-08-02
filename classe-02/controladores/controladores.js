const alunos = require('../dados/dados');

function getAlunos(req, res) {
	res.json(alunos);
}

function getAlunoPorId(req, res) {

	if(Number(req.params.id) % 1 !== 0){
		res.status(400);
		res.json({"erro": "O campo ID deve ser um número!"});
		return;
	}

	const aluno = alunos.find(aluno => aluno.id === Number(req.params.id));

	if(!aluno){
		res.status(404);
		res.json({"erro": "O aluno com id " + req.body.id + " não existe"});
		return;
	}

	res.json(aluno);
}

function criarAluno(req, res){
	erro = validarAluno(req.body);

	if (erro) {
		res.status(400);
		res.json({"mensagem": erro});
		return;
	}

	const novoAluno = {
		id: alunos.length + 1,
		nome: req.body.nome,
		sobrenome: req.body.sobrenome,
		idade: req.body.idade,
		curso: req.body.curso
	};

	alunos.push(novoAluno);
	res.status(201);
	res.send();
}

function deletarAluno(req, res){

	if (Number(req.params.id) % 1 !== 0) {
		res.status(400);
		res.json({"mensage": "ID deve ser um número valido!"});
		return;
	}

	const aluno = alunos.find(aluno => aluno.id === Number(req.params.id));

	if (!aluno) {
		res.status(404);
		res.json({erro: "Aluno com id " + req.params.id + " não existe"});
		return;
	}

	const index = alunos.indexOf(aluno);
	alunos.splice(index, 1);

	res.status(200);
	res.json(aluno);
}

module.exports = {
	getAlunos,
	getAlunoPorId,
	criarAluno,
	deletarAluno
};

function validarAluno(aluno){
	if (!aluno.nome || aluno.nome.trim().length === 0) {
		return "O campo nome é obrigatório!";
	}

	if (!aluno.sobrenome || aluno.sobrenome.trim().length === 0) {
		return "O campo sobrenome é obrigatório!";
	}

	if (!aluno.idade) {
		return "O campo idade é obrigatório!";
	}

	if (!aluno.curso || aluno.curso.trim().length === 0) {
		return "O campo curso é obrigatório!";
	}

	if(typeof aluno.nome !== 'string'){
		return "O campo nome deve ser um texto!";
	}

	if(typeof aluno.sobrenome !== 'string'){
		return "O campo sobrenome deve ser um texto!";
	}

	if(typeof aluno.idade !== 'number'){
		return "O campo idade deve ser um número!";
	}

	if(typeof aluno.curso !== 'string'){
		return "O campo curso deve ser um texto!";
	}

	if (aluno.idade < 18) {
		return "O aluno deve ser maior de idade.";
	}
}