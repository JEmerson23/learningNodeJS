const http = require('http');
const url = require('url');
//manipulação de arquivos
const fs = require('fs');

http.createServer(function(request,response) {
 fs.readFile('./public/index.html',
  function(error,data){
    
   response.writeHead(200,{
    'Content-Type':'text/html'
   });
  
   response.write(data);
   
   return response.end();
 });

}).listen(8080);