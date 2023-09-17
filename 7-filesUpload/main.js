const http = require('http');
const fs = require('fs');
//módulo externo para upload de arquivos
const formidable = require('formidable');

http.createServer(function(request,response){
 const url = request.url;
 const message = {
  error: 'server error :('
 };
 
 if(url == '/fileupload') {
     const textConfirmation = 'file uploaded and moved';
    
     const userForm = new formidable.IncomingForm();
     
     userForm.parse(request, function(error,fields,files){
      if(error) {
       throwError(error,message.error);
      }
      
      const file = files.file_to_upload[0];
      
      const oldPath = file.filepath;
      const newPath = `./database/${file.originalFilename}`;
      
      fs.rename(oldPath,newPath,function(_error){
       if(_error) {
        throwError(_error,message.error);
       }
       
       response.write(`${textConfirmation} [${file.originalFilename}]`);
       console.log(textConfirmation);
       response.end();
      });

     });
     
 } else {
  fs.readFile('./public/index.html', function(error,data){
   if(error) {
    throwError(error,message.error);
   }
   response.writeHead(200,{
    'Content-Type': 'text/html'
   });
   
   response.write(data);
   
   response.end();
  });
  
 }
 
 function throwError(error,messageToClient) {
  response.end(messageToClient);
  throw error;
 }
}).listen(8080);

console.log('> server online... [http://localhost:8080]');
