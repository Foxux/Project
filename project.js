const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,output: process.stdout});

var cube = {
  a: [],
  b: [],
  c: []
};



rl.question('vvedite kolichestvo strok\n', function(answer){

cube.a = answer;
if (answer > 5){
  rl.setPrompt('Incorrect try again\n');
  rl.prompt();
  rl.on('line',(answer) =>{
    if (cube.a.trim() == answer)
    rl.close();
     else {
      rl.setPrompt(`Incorrect answer ${answer}, try again\n`);
      rl.prompt();
    }  
 })

} 
else if(cube.a < 2 ){
   rl.setPrompt(`Incorrect try again\n`);
   rl.prompt();
}
 else {
    rl.setPrompt(`Your massive is ${cube.a}\n`);
    rl.prompt()
    rl.close();
    }
 });