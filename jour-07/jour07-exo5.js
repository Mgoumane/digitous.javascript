// 05 - Filter Even
// Créez une variable numbers contenant un tableau qui contiendra les valeurs 1, 2, 3, 4, 5, 6, 7 et 8
// Créez une variable even qui appellera la méthode .filter() pour contenir les nombres pairs de numbers
// Créez une variable even qui appellera la méthode .filter() pour contenir les nombres pairs de numbers

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even = numbers.filter(function(element){
    return element % 2 === 0 ; // Je dois revoir le principe du Modulo
});
console.log(even);