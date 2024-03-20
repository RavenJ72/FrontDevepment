function search() {
    let listOfTowns = document.getElementById("towns").getElementsByTagName('li');
    let searchText = document.getElementById('searchText').value;
    let matches = 0;
    for (let town of listOfTowns) {
        if(searchText.includes(town.textContent)){
            matches++;
            town.style.fontWeight = "bold"
            town.style.textDecoration = "underline"
        }else{
            town.style.fontWeight = "normal"
            town.style.textDecoration = "none"
        }
    }
    document.getElementById("result").textContent = matches + " matches found"
}
