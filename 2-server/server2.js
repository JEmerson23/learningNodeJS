const http = require('http');

http.createServer(function(request,response){
 //request é a solicitação do cliente
 //ele possui a propriedade url que
 //contém a parte da url que vem 
 //depois do domínio
 const urlContent = request.url;
  
 response.writeHead(200,{
  'Content-Type': 'text/html'
 });
 
 response.write(urlContent);
 
 response.end();
}).listen(3000);