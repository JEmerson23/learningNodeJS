const fs = require('fs');

fs.rename('./public/example.txt','./public/example_file.txt',function(error){
 if(error) throw error;
 console.log('arquivo renomado');
});