var ID_CONTATO_INC = 3;

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
	
	controller.removeContato = function(req, res){
		var idContato = req.params.id;
		contatos = contatos.filter(function(contato){
			return contato._id != idContato;
		});
		res.status(204).end();
	};

	controller.salvaContato = function (req, res) {
		var contato = req.body;
		contato = contato._id ?
			atualiza(contato) :
			adiciona(contato);
		res.json(contato);
	};

	function adiciona(contatoNovo) {
		contatoNovo._id =  ++ID_CONTATO_INC;
		contatos.push(contatoNovo);
		return contatoNovo;
	}

	function atualiza(contatoAlterar) {
		contatos = contatos.map(function (contato) {
			if(contato._id == contatoAlterar._id) {
				contato = contatoAlterar;
			}
			return contato;
		});
		return contatoAlterar;
	}

	return controller;
}