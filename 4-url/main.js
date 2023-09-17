const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (request,response) {
 const clientURL = url.parse(request.url,true);
  
 const requiredFilePath = `./public_page/${clientURL.pathname}`;
 
 console.log('client URL:\n');
 console.log('host:\n\t',clientURL.host);
 console.log('path name:\n\t',clientURL.pathname);
 console.log('search:\n',clientURL.search);
 
 fs.readFile(requiredFilePath,function(error,data){
  if(error) {
   response.writeHead(404,{'Content-Type':'text/html'});
   response.end('not found... (error 404)');
  } else {
   response.writeHead(200,{
   'Content-Type': 'text/html' 
   });
  
   response.write(data);
  
   response.end();
  }
 });
  
}).listen(8080);