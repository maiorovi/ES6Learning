'use strict'

var getProduct = function(productId = 1000, type = 'software'){
    console.log(productId + ', ' + type)
};

getProduct();
getProduct(undefined, 'hardware');
getProduct(150)


var getTotal = function(price, tax = price * .07) {
    console.log(price + tax);
}

getTotal() // nan
getTotal(5.0) // 5.35
getTotal(5.0,2) // 7

var getTotal = new Function('price = 20.00', 'return price;');

console.log(getTotal());