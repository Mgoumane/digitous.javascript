// Exercice 1 - sum
var numbers = [];
var min = 0;
var max = 100;
for (var i = 0; i < 50; i++) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.push(randomNumber);
}
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// Exercice 2 - Max
var numbers = [];
var min = 50;
var max = 200;
for (var i = 0; i < 50; i++) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.push(randomNumber);
}
var max = numbers[0];
for (var i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
    }
}
console.log(max);

// Exercice 3 - Unique

var numbers = [];
var min = 50;
var max = 200;
for (var i = 0; i < 50; i++) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.push(randomNumber);
}
var i = 0;
var number = numbers[i];
while (number < 75 || number > 100) {
    i++;
    var number = numbers[i];
}
console.log(number);

// Exercice 4 - Nested loop
var count = 0;
var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var letters = word.split("");
    for (var j = 0; j < letters.length; j++) {
        if (letters[j] === "o") {
            count++;
        }
    }
}
console.log(letters);