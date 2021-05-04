function retangulo(lar,asterisco,alt){
    var ret = "";
    var espaco_vazio = " "
    ret += "\n"
    for(i=1;i<=alt;i++){
        for(j=1;j<=lar;j++){
            if (i == 1 || i == alt || j == 1 || j == lar){
                ret += asterisco
            }
            else{
                ret += espaco_vazio
            }
        }
        ret += "\n"
    }
    return ret
}
var altura = 10;
var largura = 20;
var asterisco = '*';
console.log(retangulo(largura,asterisco,altura))