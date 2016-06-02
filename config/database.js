var mongoose = require('mongoose');
// Habilita o debug do Mongoose - Logs do terminal
mongoose.set('debug', true);

module.exports = function (uri) {
	mongoose.connect(uri);

	//Disparando mensagem para os eventos.
	mongoose.connection.on('connected', function() {
		console.log('Mongoose! Conectado em ' + uri);
	});

	mongoose.connection.on('disconnected', function() {
		console.log('Mongoose! Disconectado de ' + uri);
	});

	mongoose.connection.on('error', function() {
		console.log('Mongoose! Erro na conexão: ' + uri);
	});

	//Disparando mensagem no encerramento do servidor

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Mongoose! Desconectado pelo termino da aplicação');
			//0 Indica indeica que a finalização aconteceu sem errros.
			process.exit(0);
		});
	});
}