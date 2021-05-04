function calculartrabalho(entrada,saida){
    var diff = saida.getTime() - entrada.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
    diff -= minutes * 1000 * 60;
    var seconds = Math.floor(diff / 1000);
    console.log("Tempo de trabalho:", (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes+ ":" + (seconds <= 9 ? "0" : "") + seconds);
}
var tempo_entrada = "8:30:55";
var tempo_saida = "17:30:12";
var entrada_split = tempo_entrada.split(':').map(function(item) {
    return parseInt(item, 10);
});
var saida_split = tempo_saida.split(':').map(function(item2) {
    return parseInt(item2, 10);
});
var entrada = new Date(0,0,0,entrada_split[0],entrada_split[1],entrada_split[2]);
var saida = new Date(0,0,0,saida_split[0],saida_split[1],saida_split[2]);
if(entrada_split[0] >= 8 && saida_split[0] <= 18){
    calculartrabalho(entrada,saida)
}
else{
    console.log("Horário inválido")
}