// 01 - File system
// affichez le contenu de jour07.txt dans la console
var fs = require("fs");


fs.readFile("./jour07.txt", function(error, data){ /*path : le chemin du fichier*//*callback : fonction qui récupère deux arguments err et stats*/
    console.log(error);
    console.log(data.toString());
})





