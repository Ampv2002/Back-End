function calculartrabalho(Hora_entrada,Minuto_entrada,Segundo_entrada,Hora_saida,Minuto_saida,Segundo_saida){
    var horas_adicionar = 0;
    var minutos_adicionar = 0;
    segundos_trabalhados = Segundo_saida - Segundo_entrada;
    if (segundos_trabalhados < 0){
        segundos_trabalhados = 60 + segundos_trabalhados;
        minutos_adicionar += 1;
    }
    minutos_trabalhados = (Minuto_saida - Minuto_entrada) + minutos_adicionar;
    if (minutos_trabalhados < 0){
        minutos_trabalhados = 60 + minutos_trabalhados;
        horas_adicionar += 1;
    }
    horas_trabalhados = (Hora_saida - Hora_entrada) + horas_adicionar
    console.log("O funcionário trabalhou",horas_trabalhados,"horas,", minutos_trabalhados, "minutos e",segundos_trabalhados,"segundos." )
}
Hora_entrada = 8
Minuto_entrada = 30
Segundo_entrada = 58
Hora_saida = 17
Minuto_saida = 30
Segundo_saida = 37
if (Hora_entrada>=8 && Hora_saida<=18){
    calculartrabalho(Hora_entrada,Minuto_entrada,Segundo_entrada,Hora_saida,Minuto_saida,Segundo_saida)
}
else{
    console.log("Horário inválido")
}

