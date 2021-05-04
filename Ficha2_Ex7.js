function triangulo(alt,car){
    var tri = "";
    tri += "\n"
    for (i=1; i <= alt; i++){
        for(j=1;j<=i;j++){
            tri += car
        }
        tri += "\n"
    }
    return tri
}
var altura = 10;
var asterisco = '*';
console.log(triangulo(altura,asterisco))