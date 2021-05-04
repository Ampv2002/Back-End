function calcula_imc(altura,peso){
    var imc
    imc = peso/(altura)**2
    if (imc<18.5) {
        console.log("Abaixo do peso")
    }
    else if((imc>=18.5) && (imc<=25) ){
        console.log("No peso normal")
    }
    else if((imc>25) && (imc<=30) ){
        console.log("Acima do peso")
    }
    else{
        console.log("Obeso")
    }
}
altura = 1.85
peso = 67.5
calcula_imc(altura,peso)
