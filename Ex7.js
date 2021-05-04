var array = [5,7,3,8,9,10]
var max = Math.max(...array)
var min = Math.min(...array)
var media = 0
for(i=0;i<array.length;i++){
    media += i
}
media = media / array.length
console.log("O maior número é:",max)
console.log("O menor número é:",min)
console.log("A média é:",media)