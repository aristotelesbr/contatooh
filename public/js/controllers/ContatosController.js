angular.module('contatooh').controller('ContatosController', function($scope, $http){
	$scope.contatos = [];

	$scope.filtro = '';

	$http.get('/contatos')
	.success(function(data) {
		$scope.contatos = data;
	})
	.error(function(statusText) {
		console.log("Não foi possivel obeter a lista de contatos");
		console.log("statusText");
	});
});