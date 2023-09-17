const http = require('http');
//módulo para melhor manuseio url
const url = require('url');

http.createServer(function(request,response){
 const urlQuery = url.parse(request.url,true).query;
 
 const text = (function() {
  const _response = {
   'elpsycongree' : "it's congroo, not congree...",
   'elpsycongroo' : "...let's destroy the structures that rule the world..."
  };
  
  if(urlQuery.password) {
   return _response[urlQuery.password];
  } else {
   return "[defina uma password na url...]";
  }
  
 })();
  
 response.writeHead(200,{
  'Content-Type': 'text/html'
 });
  
 response.end(text);
}).listen(3000);