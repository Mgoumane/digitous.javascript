// 06 - Cakes
//Créez une variable cakes contenant la valeur suivante :
var cakes = [
    {
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]
// À l'aide des méthodes .filter() et .map(), vous donnerez le statut "sold out !" aux gâteaux au chocolat
//Ces deux gâteaux doivent être stockés dans une nouvelle variable, affichez-la dans la console
/* resultat attendu
[
	
	{
		name: "brownie",
		flavor: "chocolate",
		status: "sold out !"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "sold out !"
	},
]
*/

var chocolatesCake = cakes.filter(function(element) {
    return element.flavor === "chocolate";
}).map(function(element) {
    element.status = "Sold out !";
    return element;
});

console.log(chocolatesCake);