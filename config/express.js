var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();

	// configuração de ambiente
	app.set('port', 3000);
	// middleware
	app.use(express.static('./public'));
	// setando o tipo ejs, uma especie de "erb"
	app.set('view engine', 'ejs');
	// setando o diretorio
	app.set('views', './app/views');
	app.use(bodyParser.urlencoded({extended: true}));

	app.use(bodyParser.json());
	app.use(require('method-override')());
	// usando a dependencia express-load para 
	// carregar os arquivos automaticamente respeitando a ordem M-C-R
	// cwd: 'app' - Muda o dirretorio padrão 'Contatooh' para 'Contatooh/app'
	load('models', {cwd:'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};
