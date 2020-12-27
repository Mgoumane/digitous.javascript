// Exercice 1 - Object
var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
};
console.log(cat);
console.log(cat.age);
console.log(cat["age"]);
if (cat.isCute) {
    console.log("So cute !");
}

// Exercice 2 - Combine

var cat2 = {
    name: "Felix",
    age: 20,
    isCute: false
};
console.log(cat2);
var cats = [cat, cat2];
console.log(cat.age, cats[0].age);
console.log(cat2.isCute, cats[1].isCute);

// Exercice 3 - Even
function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
checkIfEven(3);
checkIfEven(4);
checkIfEven(543);
checkIfEven(86734319);

// Exercice 4 - Compare
function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger`);
    } else if (num2 > num1) {
        console.log(`${num2} is bigger`);
    } else {
        console.log("Both are the same");
    }
}
compare(12, 10);
compare(1, 10);
compare(10, 10);

// Exercice 5 - Add up
function addUp(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
var result = addUp(12);
console.log(result);
addUp(12);

// Exercice 6 - Time 
function format(num) {
    // 124 secondes => 2m et 4s
    // je sais que 1m = 60s
    /*
    console.log(Math.floor(num / 3600)); // heures
    console.log(num % 3600) // minutes et les secondes
    console.log(Math.floor(num % 3600 / 60));
    console.log(num % 3600 % 60);
    */

    var hours = Math.floor(num / 3600);
    var restHours = num % 3600;
    var minutes = Math.floor(restHours / 60);
    var secondes = restHours % 60;
    console.log(`${hours} : ${minutes} : ${secondes}`);
}
format(3700);

