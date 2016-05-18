angular.module('contatooh').controller('ContatosController', function($scope){
	$scope.total = 0;
		$scope.incrementa = function() {
				$scope.total++;
	};

	$scope.filtro = '';

	$scope.contatos = [
		{
			"_id": 1,
			"nome": "Ari",
			"email": "ari@br.com"
		},
		{
			"_id": 2,
			"nome": "Lenna",
			"email": "lenna@br.com"
		},
		{
			"_id": 3,
			"nome": "teste1",
			"email": "teste1@br.com"
		},
		{
			"_id": 4,
			"nome": "Teste2",
			"email": "teste2@br.com"
		}
	];
});