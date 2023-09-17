/*
 this example uses third-party npm packages.
 [json-server]
*/

const http = require('http');
const fs = require('fs');

http.createServer(function(request,response){
 fs.readFile('./public/index.html',function(error,data){
  if(error) {
   response.writeHead(404,{'Content-Type': 'text/html'});
   response.write('not found 404...');
   response.end();
  } else {
   response.writeHead(200,{'Content-Type':'text/html'}); 
   
   response.write(data);
   
   response.end();
  }
 });
}).listen(8080);

console.log('> website online at http://localhost:8080');