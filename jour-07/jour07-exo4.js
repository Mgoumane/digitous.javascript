// 04 - Filter Numbers
// Créez une variable array contenant un tableau qui contiendra les valeurs 1, "toto", 34, "javascript" et 8
// Créez une variable numbers qui appellera la méthode .filter() pour contenir les nombres de array
// Affichez les valeurs de numbers dans la console

var array = [1, "toto", 34, "javascript", 8, -5];
var numbers = array.filter(function(element){
    return typeof element === "number"; 
    // La méthode `filter()` crée un nouvel array avec tous les éléments de l’array original qui passeront la fonction de vérification .
    // 
})
console.log(numbers);
console.log(array);