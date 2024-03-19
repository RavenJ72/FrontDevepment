function age(age) {
    if (age > 0) {
        if (age > 0 && age < 3) {
            console.log("младенец")
        } else if (age < 14) {
            console.log("ребенок")
        } else if (age < 20) {
            console.log("подросток")
        } else if (age < 66) {
            console.log("взрослый")
        } else {
            console.log("пожилой")
        }
    }
}

age(20)
age(1)
age(100)


function round(data) {
    data = data.split(",")
    let number = data[0];
    let accuracy = data[1];
    if (accuracy > 15) accuracy = 15;
    return number.split(".")[1] > accuracy ? parseFloat(number) : parseFloat(number.split(".")[0] + "." +
        number.split(".")[1].substring(0, accuracy))
}


console.log(round("10.5,3"))
console.log(round("3.1415926535897932384626433832795,2"))

function divider(number) {
    for (let element of [2, 3, 6, 7, 10].reverse()) {
        if (number % element === 0) {
            return ("Число делится на " + element)
        }
    }
    return ("Не делится")
}

console.log(divider(15))
console.log(divider(12))
console.log(divider(1643))

function vacation(data) {
    data = data.split(",")
    let students = [8.45, 9.80, 10.46]
    let coop = [10.90, 15.60, 22.50]
    let basic = [15, 20, 22.50]
    let map = {"Friday": 0, "Saturday": 1, "Sunday": 2,}

    switch (data[1].replaceAll("\"", "")) {
        case "Students": {
            console.log("Total price " + (students[map[data[2].replaceAll("\"", "")]] * data[0] * (data[0] >= 30 ? 0.85 : 1)).toFixed(2))
            break
        }
        case "Cooperative": {
            console.log("Total price " + (coop[map[data[2].replaceAll("\"", "")]] * (data[0] >= 100 ? data[0] - 10 : data[0])).toFixed(2))
            break
        }
        case "Regular": {
            console.log("Total price " + (basic[map[data[2].replaceAll("\"", "")]] * data[0] * (data[0] >= 10 && data[0] <= 20 ? 0.95 : 1.00)).toFixed(2))
            break
        }
    }
}


vacation("30,\"Students\",\"Sunday\"")
vacation("40,\"Regular\",\"Saturday\"")

