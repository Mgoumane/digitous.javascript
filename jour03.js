// 01 - Array
var fruits = ["mango", "lemon", "blueberry"];
console.table(fruits);
console.log(fruits);

// 02 - Acces

var ingredients =["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// 03 - Add and Remove
var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);
objects.pop("lamp");
console.log(objects);
objects.push("laptop");
console.log(objects);
objects.shift("chair");
console.log(objects);

//04 - Order
var numbers = [4 , 10, 8 , 12 , 6];
console.log(numbers.reverse());
numbers = numbers.sort((a, b) => a - b);
console.log(numbers);

// 05 - Boucle
var total = 0 ;
var limit = 10 ;
for (var i=0; i<=limit;i++){
    total = total + i
}
console.log(total);

// 06 - Reverse

var string = "Hello Konexio !";
var splitted = string.split("");
var reversed = [];
for (i = 0; i <= splitted.length; i++) {
  reversed.unshift(splitted[i]);
}
var result = reversed.join("");
console.log(result);
