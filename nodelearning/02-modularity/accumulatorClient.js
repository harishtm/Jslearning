var acc = require('./accumulator.js')();

acc.add(100);
acc.substract(50);
acc.multiply(2);
acc.divide(20)

console.log("Result for the above operation is : ", acc.getresult())