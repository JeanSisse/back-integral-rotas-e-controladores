function verificarSenha(req, res, next){
	if (req.query.senha === 'cubos123') {
		next();
	} else {
		res.status(401);
		res.json({erro: "senha incorreta!"});
	}
}

module.exports = {
	verificarSenha
};