// 01 - File system
// affichez le contenu de jour07.txt dans la console
var fs = require("fs");


fs.readFile("./jour07.txt", function(error, data){
    console.log(error);
    console.log(data.toString());
})

// 02 - Map Double
// Créez une variable array contenant un tableau qui contiendra les valeurs 1, 2, 3, 4 et 5
// Créez une variable double qui appellera la méthode .map() pour contenir les doubles des valeurs de array
// Affichez les valeurs de double dans la console 

var array = [1, 2, 3, 4, 5];
var doubles = array.map(function(num) {
    return num * 2;
  });
  
  console.log(doubles); 



// 03 - Map Names
// Créez une variable shortNames qui appellera la méthode .map() pour contenir une version compacte de longNames :
//// Résultat attendu :
/*[
	{
		name: "Jane Doe"
	},
	{
		name: "John Smith"
	}
]
*/
// Affichez les valeurs de shortNames dans la console
var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]