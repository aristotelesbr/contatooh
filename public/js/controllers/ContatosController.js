angular.module('contatooh').controller('ContatosController',
	function(Contato, $scope) {

		$scope.contatos = [];

		$scope.filtro = '';

		$scope.mensagem = {texto: ''};

		function buscaContatos() {
			// A função query monta uma requisição do tipo GET para o recurso '/contatos'.
			Contato.query(
				function(contatos) {
					$scope.contatos = contatos;
					$scope.mensagem = {};
				},
				function(erro) {
					console.log(erro);
					$scope.mensagem = { texto: "Não foi possivel obter a lista de contatos"};
				}
			);
		}
		buscaContatos();

		$scope.remove = function(contato) {
			Contato.delete({id: contato._id},
				buscaContatos,
				function(erro) {
					$scope.mensagem = {texto: "Não foi pssovel remover o contato."};
					console.log(erro);
				}
			);
		};
});