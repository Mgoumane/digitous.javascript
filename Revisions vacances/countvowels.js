//02 - Compter les voyelles
//Créez une fonction countvowels qui prend une string en paramètre et qui retourne le nombre de voyelles contenues dans un texte.

function countvowels(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' ||
            str.charAt(i) == 'o' || str.charAt(i) == 'u') {
            count++;
        }
    }
    return count;
}
var result = countvowels("bonjour");
console.log(result);

var test =  Date.now()
console.log(test)