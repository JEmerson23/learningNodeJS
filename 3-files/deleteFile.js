const fs = require('fs');


//deleta um arquivo
fs.unlink('./public/todayDate.txt',function (error) {
 if(error) throw error;
 
 console.log('file deleted');
});