// ... - rest symbol
var showCategories = function(productId, ...categories) {
    console.log(categories instanceof Array);
    console.log(categories);
}

showCategories(123, 'search', 'advertising');
showCategories(123);


// dynamic function

var showCategoriesDynamic = new Function("...categories", "return categories;");

console.log(showCategoriesDynamic('search', 'advertising'));

var prices = [12, 20, 18];

var newPriceArray =  [...prices];

console.log(newPriceArray);