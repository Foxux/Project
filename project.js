const readline = require('readline');
const r1 = readline.createInterface({input: process.stdin,output: process.stdout});

console.log("Здравствуйте! Данный код осущетсвляет нарисовку квадрата с вашим количествои строк, столбцов и символов. Будьте внимательны,так как допустимое значение строк и квадратов от 2 до 5 соответсвенно,так же строки и столбцы должны быть одинаковы, квадрат же).Приятного пользования!\n\n\n");
function testPrimer(){
 



  r1.question("Введите количество строк от 2 до 5 \n",(answer)=>{
    
     a = answer;
    if ( a > 5 ){
      console.log("Вы ввели больше чем позволяет условие, введите пожалуйста еще раз\n");
      return testPrimer();
    }
    else if( a < 2 ){
      console.log("Вы ввели меньше чем позволяет условие, введите пожалуйста еще раз\n");
      return testPrimer();
    }
  
    else{
      ac();
      r1.question("Хорошо, введите количество столбцов от 2 до 5 \n",(answer2)=>{
        b = answer2;
        if ( b > 5, a != b ){
          console.log("Вы либо ввели БОЛЬШЕ чем позволяет условие,либо столбцы НЕ РАВНЫ строкам, введите пожалуйста еще раз\n");
          return testPrimer();
        }
          else if( b < 2, a != b ){
            console.log("Вы либо ввели МЕНЬШЕ чем позволяет условие,либо столбцы НЕ РАВНЫ строкам, введите пожалуйста еще раз\n");
            return testPrimer();
          }
              else{
                r1.question("Введите символ для заполнения квадрата, допустимые символы: @, #, %. \n",(answer3)=>{
                  c = answer3;
                  
                  if ( c == "@" ){
                    
                    
                    
                  }
                    else if( c == "#" ){
                      console.log("ok!");
                    }
                    else if( c== "%" ){
                      console.log("ok!!");
                    }
                    else {
                      console.log(`Вы ввели неверный символ, введите параметры квадрата с начала. Будьте внимательней пожалуйста! \n`);
                      return testPrimer();
                    }
                    
                  
                
            })
          }
      })
    }
    
  })

}
testPrimer();
