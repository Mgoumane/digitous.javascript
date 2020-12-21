const { addition } = require("../table-utils");

function multiply(number) {
    for (var i = 1; i <= 10; i++) {
        // 5 x 6 = 30
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

multiply(parseInt(process.argv[2]));

addition
