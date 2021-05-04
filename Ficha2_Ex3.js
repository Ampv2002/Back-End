function retornavogais(str){
    qtd_vogais = 0
    for(i = 0; i<str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            qtd_vogais += 1
        }
    }
    console.log("Número de vogais na frase: ",qtd_vogais)
}
var frase = 'ThE qUIck brown fox jumps over the lazy dog'.toLowerCase();
retornavogais(frase)