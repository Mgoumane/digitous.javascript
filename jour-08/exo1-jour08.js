//  01 - Countries
// À l'aide de l'url suivante : "https://restcountries.eu/rest/v1/all" :
// Créez un array vide countriesNames
// Créez une fonction asynchrone getCountries pour récupérer les pays et stocker leurs noms dans l'array
// Afficher les noms des pays récupérés dans la console, séparés par un tiret

var request = require('request');

var countriesNames = [];


request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {
    
    var countries =  JSON.parse(body);
    
    for(var i = 0 ; i < countries.length; i++){ 
        countriesNames.push(countries[i].name);
       
        var countriesNamesAvectirets = countriesNames.join();
        console.log(countriesNamesAvectirets);
    }

});

