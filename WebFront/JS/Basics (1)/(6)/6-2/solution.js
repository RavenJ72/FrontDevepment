function solve() {
    let text = document.getElementById("text").value
    let convention = document.getElementById("naming-convention").value
    function toPascalCase(str){
        return str.split(' ').map(e=> e.charAt(0).toUpperCase() + e.slice(1)).join('')
    }
    let result = "Error!";
    switch (convention) {
        case  "Camel Case":{
            result = toPascalCase(text).charAt(0).toLowerCase() + toPascalCase(text).slice(1)
            break;
        }
        case "Pascal Case":{
            result = toPascalCase(text)
        }
    }
    document.getElementById("result").innerText = result
}







