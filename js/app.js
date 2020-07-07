'use strict';

var carsItems = [];

function Cars(carModel, modelYear, manufacturer){
    this.carModel = carModel;
    this.modelYear = modelYear,
    this.manufacturer = manufacturer,
    this.price = generateRandomPrice(minPrice,maxPrice);
    carsItems.push(this);
}


var minPrice = 7000;
var maxPrice = 100000;

function generateRandomPrice (minPrice,maxPrice){
var randNumber = Math.random();
var randPrice = Math.floor(randNumber*(maxPrice-minPrice +1) + minPrice);
return randPrice;
}



var submition = document.getElementById('submit');
submition.addEventListener('click',handleClick)

function handleClick(event){
    event.preventDefault();
    newCar();
    storeToLocalStorage();

}

function newCar (){
    var carModel = document.getElementById('carModel').value;
    var carModelYear = document.getElementById('carModelYear').value;
    var manufacturer = document.getElementById('manufacturers').value;
    var newCar = new Cars (carModel,carModelYear,manufacturer);
} 

function storeToLocalStorage(){
    localStorage.setItem('Cars',JSON.stringify(carsItems));
}

function createTable(){
    var cars = JSON.parse(localStorage.getItem('Cars'));

    var parentElement = document.getElementById('table');
    var table = document.createElement('table');
    var tr = document.createElement('tr')
    tr.textContent = cars[i].carModel;
}

