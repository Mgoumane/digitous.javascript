//  01 - Countries
// À l'aide de l'url suivante : "https://restcountries.eu/rest/v1/all" :
// Créez un array vide countriesNames
// Créez une fonction asynchrone getCountries pour récupérer les pays et stocker leurs noms dans l'array
// Afficher les noms des pays récupérés dans la console, séparés par un tiret

var request = require('request');

var countriesNames = [];
function getCountries(){

    request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {
    // je vais devoir faire une boucle qui va parcourir tout l'array BODY pour récuperer la valeur de la clé name dans chaque objet traversé
    
});

}

