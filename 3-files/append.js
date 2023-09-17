const fs = require('fs');

const content = `html\njavascript\ncss\nnodejs\n`;
//adiciona  conteúdo fim do arquivo 
fs.appendFile('./public/list.txt',content,function(error){
 if(error) throw error;
 console.log('completed');
});