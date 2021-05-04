var num=6
var i
var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
if ((num>12) && (num<1)) {
    console.log('Número inválido');
}
else {
    for (i = 0; i<num; i++){
        if (i = num) {
            console.log("Número equivale ao mês de ", meses[i-1])
        }
    }
}