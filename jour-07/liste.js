// fonction qui prend en paramètre une liste 
// Et qui retourne une liste avec chaque element +  1 
function increment(list){
    var newList = [];
    for (var i = 0; i < list.length; i++ ){
        newList.push(list[i] + 1 );
    }
    return newList;
}
var listeAmodifier = [15 , 17 , 18]
console.log(increment(listeAmodifier))

//methode plus courte
function incrementMap(list){
    return listeAmodifier.map(function(element){ // En fait je definit une fonction qui va etre appeler sur chaque element de la liste
        return element + 1
    })
}
console.log(increment(listeAmodifier))


// POUR FILTRER DES ELEMENTS D'UNE LISTE 
function bigNumbers (list){
    var newList = [];
    for (var i = 0; i < list.length; i++ ){
        if(liste[i] >= 10){
            newList.push(list[i]);
        }
    }
    return newList;
}
console.log(bigNumbers(listeAmodifier));
// Autre méthode 
function bigNumbersFlter(liste){
    return liste.filter(function(element){
        return element >= 10
    })
}
console.log(bigNumbersFlter(listeAmodifier));




