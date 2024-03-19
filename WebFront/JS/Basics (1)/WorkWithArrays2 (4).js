function minOfTreeNumbers(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}

// console.log(minOfTreeNumbers(2, 5, 3));
// console.log(minOfTreeNumbers(600, 342, 123));
// console.log(minOfTreeNumbers(25, 21, 4));


function substract(a, b, c) {
    return (a + b) - c;
}

// console.log(substract(23, 6, 10));
// console.log(substract(1, 17, 30));
// console.log(substract(42, 58, 100));


function printBinaryMatrixFromSize(size) {
    for (let i = 0; i < size; i++) {console.log((size.toString() + " " ).repeat(size))}
}

// printBinaryMatrixFromSize(3);
// console.log();
// printBinaryMatrixFromSize(7);
// console.log();
// printBinaryMatrixFromSize(2);


function printProgressBar(percentage) {
    if(percentage === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }else{
        console.log(percentage + "% [" + "%".repeat(Math.floor(percentage / 10)) + "-".repeat(10 - Math.floor(percentage / 10)) + "]");
        console.log("Still loading...");
    }
}

// printProgressBar(30);
// console.log();
// printProgressBar(50);
// console.log();
// printProgressBar(100);





