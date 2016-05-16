var contatos = [
	{_id: 1, nome: 'Ari', email: 'ari@br.com'},
	{_id: 2, nome: 'Lenna', email: 'lenna@br.com'},
	{_id: 3, nome: 'teste1', email: 'teste1@br.com'},
	{_id: 4, nome: 'Teste2', email: 'teste2@br.com'}
];

module.exports = function() {
	var controller = {};
	controller.listaContatos = function(req, res) {
		res.json(contatos);
	};
	controller.obtemContato = function(req, res){
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == idContato;
		})[0];
		// Após requisição, é feita a verificação e o redirecionamento com IF.
		contato ?
			res.json(contato) :
			res.status(404).send('Contato não encontrado');
	};
	return controller;
};