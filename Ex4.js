multiplicacao = 0
for (i = 0; multiplicacao <= 20; i++){
    if (5 * i < 20){
        multiplicacao = 5 * i
        console.log("5 X ", i, " = ",multiplicacao)
    }
    else{
        break;
    }
}