var array = [];
array.push(function(){
    console.log('Hello World 1');
});
array.push(function(){
    console.log('Hello World 2');
});
array.push(function(){
    console.log('Hello World 3');
});
for (i = 0; i < array.length; i++){
    array[i]() // os parentes vai buscar a função dentro do elemento i
};
console.log("");
array.forEach(element => {
    element();
});