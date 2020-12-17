function caLculate(number1 , operateur , number2){
    if(operateur === "+"){
        return  number1 + number2;
    } else if (operateur === "-"){
        return  number1 - number2;
    }
     else if (operateur === "*"){
        return  number1 * number2;
    }
     else if (operateur === "/"){
        return  number1 / number2;
    }
     else if (operateur === "%"){
        return  number1 % number2;
    }
}


var result = caLculate(process.argv[2], process.argv[3] , process.argv[4] );
console.log(process.argv);
console.log(result)

   