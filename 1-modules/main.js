const http = require('http');
const show = require('./moduleExample');

http.createServer(function(request,response){
 response.writeHead(200,{
  'Content-Type': 'text/html'
 });
 response.end(show.serverDate());
}).listen(3000);