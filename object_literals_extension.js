'use strict'

var price=  5.99, quantity = 30;
var productView = {
    price,
    quantity,
    calculateValue() {
        return this.price * this.quantity;
    }
};

console.log(productView);
console.log(productView.calculateValue());


var field = 'dynamicField'
var price = 5.99
var method = 'doIt'


var productView = {
    [field] : price,
    [method + "-001"]() {
        console.log("in a method")
    }
};



productView["doIt-001"]()
console.log(productView);