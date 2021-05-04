var ArrayCheck = {
    isEmpty: function(array,array2){
        if (array.length == 0){
            console.log("Array vazio!")
            Empty = true
        }
        else{
            console.log("Array não vazio!")
            Empty = false
        }
        if (array2.length == 0){
            console.log("Array 2 vazio!")
            Empty2 = true
        }
        else{
            console.log("Array 2 não vazio!")
            Empty2 = false
        }
    },
    max: function(array){
        console.log("O maior número é: ", Math.max(array))
    },
    min: function(array){
        console.log("O menor número é: ", Math.min(array))
    },
    average: function(array){
        var soma = 0;
        var media = 0;
        for(i=0; i<array.length; i++){
            soma = soma + array[i];
        }
        media = soma/array.length;
        console.log("A média é: ", media)
    },
    indexOf: function(array,value){
        for(i=0; i<=array.length; i++){
            if(value == array[i]){
                console.log("Posição: ",i+1)
            }
         }

    },
    subArray: function(array,startIndex,endIndex){
        var A = [];
        for(i = startIndex; i <= endIndex; i++){
            A.push(array[i]);
        }
        console.log("Novo array:",A);
    },
    isSameLength: function(array,array2){
        if (array.length == array2.length){
            console.log("Mesmo tamanho!")
        }
        else{
            console.log("Tamanhos diferentes!")
        }
    },
    reverse: function(array){
        var array_invertido = array.slice(0).reverse()
        console.log("Array invertido: ",array_invertido)
    },
    contains: function(array,value){
        for(i=0; i<array.length; i++){
            if (array[i] == value){
                console.log("Valor encontrado na posição: ", i+1)
            }
        }
    },
    concatenate: function(array,array2){
        NovoArray = array.concat(array2)
        console.log("Array concatenado: ",NovoArray)
    },
}
module.exports = ArrayCheck
