'use strict'

var getAge = () => .92;

console.log(typeof .92);
console.log(getAge());

var getPrice = (count, tax) => {
        var price = count * 4.0;
        price *= (1 + tax);
        return price;
}

var invoice = {
    number : 123,
    name : "Vasia",
    process : function() {
        console.log(this);
        console.log(this.name)
    }
}

invoice.process()



// we don t have access to object on which function invoke when using arrow function syntax
var invoiceWithArrow = {
    number : 124,
    process: () => console.log(this)
}

invoiceWithArrow.process();

//

var newInvoice = {
    number: 456
};
// ??? what is bind - clarify
// invoice.process().bind(newInvoice)();

// what is call
// invoice.process().call(newInvoice);
var user = {
    fistName : "Vasia",
    sayHi :  function() {
        console.log(this.fistName)
    }
}

setTimeout(user.sayHi.bind(user), 1000);

//curring

function mul(a,b) {
    return a * b;
}

var double = mul.bind(null, 2);
console.log("5 is doubled: " + double(5));

//bind in javascript is useful when
// 1) you need to reuse function with different context
// 2) you can do currying


function pritnFullNameWithDelimiter(delimiter) {
    console.log(this.firstName + ' ' + delimiter + ' ' + this.lastName);
}

var obj = {
    firstName : 'Egor',
    lastName : 'Maiorov'
}


pritnFullNameWithDelimiter.call(obj, ',')

