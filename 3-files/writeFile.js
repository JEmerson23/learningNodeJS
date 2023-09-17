const fs = require('fs');

const content = new Date().toString(); 
//escreve em arquivo apagando o conteúdo existente
fs.writeFile('./public/todayDate.txt',content,function(error){
 if(error) throw error;
 console.log('salvo');
});