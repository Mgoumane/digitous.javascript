function caLculate(number1 , operateur , number2){
    var num1 = parseInt(number1);
    var num2 = parseInt(number2);
    if(operateur === "+"){
        return num1 + num2;
    }
}

console.log(caLculate(process.argv[2] ,process.argv[3] , process.argv[4]));
