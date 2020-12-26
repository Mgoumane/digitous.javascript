// Exercie 1 - Comptons
var i = 50;
while (i <= 200) {
    console.log(i);
    i = i + 2;
}
var i = 50;
while (i <= 200) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// Exercice 2
var dice = null;
var count = 0;
var min = 1;
var max = 6;
while (dice !== 6) {
    dice = Math.floor(Math.random() * (max - min + 1) + min); // 1 2 3 4 5 ou 6
    count++;
}

console.log(count);

// Exercice 3
var ussainBolt = 0;
var tysonGay = 0;
var min = 1;
var max = 10;

while (ussainBolt < 100 || tysonGay < 100) {
    var number1 = Math.floor(Math.random() * (max - min + 1) + min);
    var number2 = Math.floor(Math.random() * (max - min + 1) + min);
    ussainBolt += number1;
    tysonGay += number2;

    console.log("Ussain Bolt", ussainBolt);
    console.log("Tyson Gay", tysonGay);
}

/*do {
    var number1 = Math.floor(Math.random() * (max - min + 1) + min);
    var number2 = Math.floor(Math.random() * (max - min + 1) + min);
    ussainBolt += number1;
    tysonGay += number2;
} while (ussainBolt < 100 || tysonGay < 100);*/

if (ussainBolt > tysonGay) {
    console.log("Le vainqueur est Ussain Bolt");
} else if (tysonGay > ussainBolt) {
    console.log("Le vainqueur est Tyson Gay");
} else {
    console.log("Egalité !");
}