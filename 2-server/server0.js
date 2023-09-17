const http = require('http');

const server = http.createServer(function(request,response) {
 //response é a resposta para o cliente
 //escreve ao cliente 
 response.write('El psy congroo...');
 //encerra a conexão
 response.end();
});

server.listen(8080);