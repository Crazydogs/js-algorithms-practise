var Union = require('./union.js');

var myUnion = new Union(10);
console.log(myUnion.node);
myUnion.union(1, 2);
console.log(myUnion.node);
myUnion.union(2, 3);
console.log(myUnion.node);
myUnion.union(3, 9);
console.log(myUnion.node);
myUnion.union(9, 1);
console.log(myUnion.node);
console.log(myUnion.count);
