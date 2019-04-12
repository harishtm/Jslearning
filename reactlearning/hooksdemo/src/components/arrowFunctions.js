/* Basic syntax with multiple paramters */

// ES5

var multiplyES5 = function(x, y) {
    return x * y;
}

// ES6

const multiplyES6 = (x, y) => { return x * y };

// Curly brackets aren’t required if only one expression is present.
// The preceding example could also be written as:

const multiplyES6 = (x, y) => x * y;

// Basic syntax with one parameter

// ES5

var pharseSplitterES5 = function phraseSplitter(phrase){
    return phrase.split(' ');
}

// ES6

const pharseSplitterES6 = phrase => phrase.split(' ');

// with no paramter

// ES5

var docLogES5 = function docLog() {
    console.log(document)
}

// ES6

var docLog = () => console.log(document)

// Object literal syntax

// Arrow functions, like function expressions, can be used to return an object literal expression.
// The only caveat is that the body needs to be wrapped in parentheses,
// in order to distinguish between a block and an object (both of which use curly brackets).

var setNameIdsES5 = function setnameIds(id, name) {
    return {
        id: id,
        name: name
    }
}

var setNameIdsES6 = () => ({id:id, name:name});

// Use case for arrow functions

// One common use case for arrow functions is array manipulation and the like.
// It’s common that you’ll need to map or reduce an array

const smartPhones = [
    { name:'iphone', price:649 },
    { name:'Galaxy S6', price:576 },
    { name:'Galaxy Note 5', price:489 }
  ];

// ES5

var price = smartPhones.map(function(smartPhones){
    return smartPhones.price;
})

// ES6

const prices = smartPhones.map(smartPhone => smartPhone.price)

// Here’s another example using the array filter method:

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var divisibleby3ES5 = array.filter(function(val){
    return val % 3 == 0;
})

const divisibleby3ES6 = array.filter(val => val % 3 == 0)
