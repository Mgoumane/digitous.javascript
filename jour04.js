// Exo  - 01 
var cat = {
    name : "garfield",
    age : 3,
    isCute : true,
};
console.log(cat);
console.log(cat.age);
if (cat.isCute === true) {  
    console.log("So cute");
}

// Exo - 02 
var cat2 = {
    name : "minou",
    age : 4,
    isCute : false,
};
var cats = [cat , cat2] ;
console.log(cats[0].age );
console.log(cat2.isCute);
