angular.module('contatooh').controller('ContatoController', 
	function($scope, $routeParams, $resource) {

		//Aqui continua no plural, é rota do lado do servidor
		var Contato = $resource('/contatos/:id');

		if($routeParams.contatoId){
			Contato.get({id: $routeParams.contatoId},
				function (contato) {
					$scope.contato = contato;
				},
				function (erro) {
					$scope.mensagem = {texto: 'Não foi possivel obter o contato.'};
					console.log(erro);
				}
			);
		} else {
			$scope.contato = {};
		}

		$scope.contato = new Contato();

		$scope.salva = function() {
			// Logica de salvamento.
			$scope.contato.$save()
				.then(function () {
					$scope.mensagem = {texto: 'Salvo com sucesso!'};
					//Limpa formulario.
					$scope.contato = new Contato();
				})
				.catch(function (erro) {
					$scope.mensagem = {texto: 'Não foi possivel salvar'};
				});
		};
});