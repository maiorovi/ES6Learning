'use strict'

var getAge = () => .92;

console.log(typeof .92);
console.log(getAge());

var getPrice = (count, tax) => {
        var price = count * 4.0;
        price *= (1 + tax);
        return price;
}