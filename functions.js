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
    process : function() {
        console.log(this);
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