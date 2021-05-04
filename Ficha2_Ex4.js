function verificarLetra(str,car){
    qtd_vezes = 0
    for (i = 0; i<str.length; i++){
        if(str[i]==car){
            qtd_vezes += 1
        }
    }
    console.log("A letra ",car.toUpperCase()," aparece ",qtd_vezes," vezes.")
}
var frase = 'ThE qUIck brown fox jumps over the lazy dog'.toLowerCase();
var letra = 'A'.toLowerCase();
verificarLetra(frase,letra)