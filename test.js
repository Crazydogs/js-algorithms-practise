var Bag = require('./bagByList.js');

var myBag = new Bag();
console.log(myBag.isEmpty());
myBag.add(1);
myBag.add(2);
myBag.add(3);
myBag.add(4);

console.log(myBag.first);
console.log(myBag.isEmpty());
