function summationOfNumbers(number){
    let summation = 0;
    number.toString().split("").map(x => summation+=parseInt(x));
    return summation
}

console.log(summationOfNumbers(123))


function concatenation(a,b,c){
    return a+b+c
}

console.log(concatenation('a','b','c'))
console.log(concatenation('%','2','0'))
console.log(concatenation('1','5','p'))


function printCityInformation(city, population, area){
    console.log(`Town ${city} has population of ${population} and area ${area} square km.`)
}

printCityInformation('Moscow', 12636312, 2561)


function simpleCalculator(a, operator, b){
    switch (operator){
        case '+': {
            console.log((a+b).toFixed(2))
            break
        }
        case '-': {
            console.log((a-b).toFixed(2))
            break
        }
    }
}

simpleCalculator(5, '+', 10)
simpleCalculator(25.5, '-', 3)


function binaryEightBitToBinary(number){
    return parseInt(number, 2).toString(10)
}

console.log(binaryEightBitToBinary('00001001'))
console.log(binaryEightBitToBinary('11110000'))