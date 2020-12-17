// Exo 01
function sortLetters(word) {
    console.log(word);
    var letters = word.split("");
    console.log(letters.sort().join(""));
}
sortLetters("konnexio");