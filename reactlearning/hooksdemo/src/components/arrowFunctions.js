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