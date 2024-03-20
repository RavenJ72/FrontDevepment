function printEmployees(arr){
    function Person(name){
        this.name = name;
        this.personalNumber = function (){return name.length;}
        this.toString = function(){
            return `Name: ${this.name} - Personal Number: ${this.personalNumber()}`;
        }
    }
    arr.map(x => new Person(x)).map(x => console.log(x.toString()));
}

// printEmployees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);


function printTownsAsJsonObjects(arr){
    function Town(town, latitude, longitude){
        this.town = town;
        this.latitude = latitude.toFixed(2);
        this.longitude = longitude.toFixed(2);
    }
    arr.map(x => x.split(' | ')).map(x => new Town(x[0], Number(x[1]), Number(x[2]))).map(x => console.log(JSON.stringify(x)));
}

// printTownsAsJsonObjects(['Moscow | 55.752220 | 37.617495', 'Beijing | 39.913818 | 116.363625']);

function shop(stock,order) {
    function Product(name, count) {
        this.name = name;
        this.count = count;
    }
    let products = [];
    for (let i = 0; i < stock.length; i+=2) {
        products.push(new Product(stock[i], Number(stock[i+1])));
    }
    for (let i = 0; i < order.length; i+=2) {
        let index = products.findIndex(x => x.name === order[i]);
        if(index === -1){
            products.push(new Product(order[i], Number(order[i+1])));
        }else{
            products[index].count += Number(order[i+1]);
        }
    }
    products.map(x => console.log(`${x.name} -> ${x.count}`));
}

//shop(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);


function getAllFilmsByStringValues(arr){

    function Movie(title) {
        this.title = title;

    }
    Movie.prototype.setDirector = function(director) {
        this.director = director;
    };
    Movie.prototype.setReleaseDate = function(releaseDate) {
        this.releaseDate = releaseDate;
    };

    let movies = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        if(tokens[0] === 'addMovie'){
            movies.push(new Movie(tokens.slice(1).join(' ')));
        }else if(tokens.includes('directedBy')){
            let index = movies.findIndex(x => x.title === tokens.slice(0, tokens.indexOf('directedBy')).join(' '));
            if(index !== -1){
                movies[index].setDirector(tokens.slice(tokens.indexOf('directedBy') + 1).join(' '));
            }
        }else if(tokens.includes('onDate')){
            let index = movies.findIndex(x => x.title === tokens.slice(0, tokens.indexOf('onDate')).join(' '));
            if(index !== -1){
                movies[index].setReleaseDate(tokens.slice(tokens.indexOf('onDate') + 1).join(' '));
            }
        }
    }

    movies.filter(x => Object.keys(x).length>2).map(x => console.log(JSON.stringify(x)));



}

// getAllFilmsByStringValues(['' +
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen']);
