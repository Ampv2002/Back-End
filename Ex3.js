var resultado
console.log("1 - Soma; 2 - Subtração; 3 - Multiplicação; 4 - Divisão; 5 - Exponencial")
function mat (num1,num2, op){
    var operacao
    switch(op){
        case 1:
            resultado = num1 + num2;
            operacao = '+'
            break;
        case 2: 
            resultado = num1 - num2;
            operacao = '-'
            break;
        case 3: 
            resultado = num1 * num2;
            operacao = '*'
            break;
        case 4: 
            resultado  = num1 / num2;
            operacao = '/'
            break;
        case 5: 
            resultado = num1 ** num2;  
            operacao = '^'
            break;    
    }
    console.log("O resultado de ",num1, operacao, num2, "=", resultado)
}
var num1 = 8;
var num2 = 2;
var op = 2;
mat(num1,num2,op)