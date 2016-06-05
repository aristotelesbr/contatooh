angular.module('contatooh').controller('ContatoController', 
	function($scope, Contato, $routeParams ) {

		if($routeParams.contatoId){
			Contato.get({id: $routeParams.contatoId},
				function (contato) {
					$scope.contato = contato;
				},
				function (erro) {
					$scope.mensagem = {texto: 'Não foi possivel obter o contato.'};
				}
				);
		} else {
			$scope.contato = new Contato();
		}

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

		Contato.query(function (contatos) {
			$scope.contatos = contatos;
		});
	});