/*CONSIGNE :
02 - Table :
Créez une fonction multiply qui recevra un paramètre (un nombre entier)
Faites en sorte que la fonction affiche la table de multiplication de ce nombre dans la console (de 1 à 10) ligne par ligne
Vous devrez donner l'argument dans le terminal en appelant le programme 
⇒ Si vous ne donnez pas d'argument, le programme doit afficher "error" dans la console
*/
function multiply(number) {
    for (var i = 1; i <= 10; i++) {
        // 5 x 6 = 30
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

multiply(parseInt(process.argv[2]));