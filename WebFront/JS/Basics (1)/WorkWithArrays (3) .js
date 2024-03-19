
function changingArrayValues(arr) {
    const newArr = arr.map((e, i) => {
        if (e % 2 === 0) {
            return e + i;
        } else {
            return e - i;
        }
    });
    console.log(newArr);
    console.log(arr.reduce((a, b) => a + b, 0));
    console.log(newArr.reduce((a, b) => a + b, 0));

}

// changingArrayValues([5, 15, 23, 56, 35]);
// changingArrayValues([-5, 11, 3, 0, 2]);


function printSameElements(arr1, arr2) {
    arr1.forEach(e1 => {
        arr2.forEach(e2 => {
            if (e1 === e2) {
                console.log(e1);
            }
        });
    });


}


// printSameElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Peter', 10, 'hey', 4, 'hello', '2']);
// printSameElements(['R','u','s','s','i','a'], ['R','u','t']);



function arrayRotation(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        arr.push(arr.shift());
    }
    console.log(arr.join(' '));
}

// arrayRotation([51, 47, 32, 61, 21], 2);
// arrayRotation([32, 21, 61, 1], 4);
// arrayRotation([2, 4, 15, 31], 5);

function isMatrixWonderful(matrix) {
    if (matrix.length === 0) return false;

    const rowSum = matrix[0].reduce((a, b) => a + b);
    for (const row of matrix) {
        if (row.reduce((a, b) => a + b) !== rowSum) return false;
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let colSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            colSum += matrix[j][i];
        }
        if (colSum !== rowSum) return false;
    }

    return true;
}

console.log(isMatrixWonderful([[4,5,6],[6,5,4],[5,5,5]]));
console.log(isMatrixWonderful([[11,32,45],[21,0,1],[21,1,1]]));
console.log(isMatrixWonderful([[1,0,0],[0,0,1],[0,1,0]]));
