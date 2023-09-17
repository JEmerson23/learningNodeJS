const http = require('http');

const pageContent = `
 <html>
  <head>
   <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  </head>
  <body>
   <p>
    Hello world!!!
   </p>
  </body>
 </html>
`;

const server = http.createServer(function(request,response){
 //define o cabeçalho da resposta
 response.writeHead(200,{'Content-Type':'text/html'});
 
 response.write(pageContent);
 
 response.end();
}).listen(8080);