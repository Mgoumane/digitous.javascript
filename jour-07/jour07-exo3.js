// 03 - Map Names
// a- Créez une variable longNames contenant la valeur suivante :
/*[
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]*/
// b- Créez une variable shortNames qui appellera la méthode .map() pour contenir une version compacte de longNames :
/* Résultat attendu :
[
	{
		name: "Jane Doe"
	},
	{
		name: "John Smith"
	}
]*/

// c- Affichez les valeurs de shortNames dans la console

var longNames = [ // J'ai un array qui contient des objets     
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]
var shortNames = longNames.map(function(element){ // Ici l'élelemnt est objet vu que longNames est array qui contient des objets
    
    var shortNames = {
        name : `${element.firstName}  ${element.lastName}`// Utiliser les templates string de préférences !
    }
    return shortNames;
})
console.log(shortNames);