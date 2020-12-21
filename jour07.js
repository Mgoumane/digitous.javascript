// Exo 01
function sortLetters(word) {
    console.log(word);
    var letters = word.split("");
    console.log(letters.sort().join(""));
}
sortLetters("konnexio");
/*
word = "konexio"
var letters = word.split("");
console.log(word)
console.log(letters)
console.log(letters.sort())
console.log(letters.sort().join(""))
*/

//Exo 02
function countEach (mot){
    var countX = 0
    var countO = 0
    for(var i=0;i< mot.length ; i++ ){
        var letter = mot.charAt(i);
        console.log(letter);
        if(letter === "x"){
            countX++
        }
        if(letter === "o"){
            countO++
        }
    }
    console.log(countX)
    console.log(countO)
    if(countX===countO){
        console.log(true) 
    }else {
        console.log(false)
    }
    }

    countEach("xxxooo");

// Exo 03 - Palindrome
function checkPal (x){
    
}