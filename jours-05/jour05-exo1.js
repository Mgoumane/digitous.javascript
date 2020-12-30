/*CONSIGNE :
01 - Calculator: 
Créez une fonction calculate qui recevra trois paramètres (deux nombres entiers et un opérateur +, -, x, / ou %)
Créez une condition (méthode au choix) pour chaque valeur possible de l'opérateur qui retournera le résultat du calcul
Affichez le résultat dans la console (vérifiez que pour les arguments 5, x et 4 vous obtenez bien 20)
Vous devrez donner les arguments dans le terminal en appelant le programme alors attention aux paramètres !
⇒ Si vous ne donnez pas trois arguments, le programme doit afficher "error" dans la console
*/
function calculate(number1, number2, operator) {
    if (operator === "+") {
        return number1 + number2;
    } else if (operator === "-") {
        return number1 - number2;
    } else if (operator === "x") {
        return number1 * number2;
    } else if (operator === "/") {
        return number1 / number2;
    } else if (operator === "%") {
        return number1 % number2;
    } else {
        console.log(`${operator} is not managed by our calculator`);
    }
}

console.log(process.argv);

if (process.argv.length !== 5) {
    console.log("Error: I'm expecting 3 parameters");
} else {
    var result = calculate(parseInt(process.argv[2]), parseInt(process.argv[4]), process.argv[3]);
    console.log(result);
}