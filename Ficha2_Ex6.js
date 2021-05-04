function retangulo(lar,asterisco,alt){
    var ret = "";
    ret += "\n"
    for(i=1;i<=alt;i++){
        for(j=1;j<=lar;j++){
            ret += asterisco
        }
        ret += "\n"
    }
    return ret
}
var altura = 10;
var largura = 20;
var asterisco = '*';
console.log(retangulo(largura,asterisco,altura))