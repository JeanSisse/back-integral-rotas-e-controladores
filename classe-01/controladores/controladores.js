const imoveis = require('../dados/imoveis');

function get(req, res) {
	res.json(imoveis);
}

function getPorId(req, res) {
	const imoviel = imoveis.find(
		(imoviel) => imoviel.id === Number(req.params.id));

	if (!imoviel) {
		res.status(404);
		res.json({erro: "imovel " + req.params.id + " não existe"});
		return;
	}

	res.json(imoviel);
}

module.exports = {
	get,
	getPorId
};