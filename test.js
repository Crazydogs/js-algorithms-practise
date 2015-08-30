/*
var mergeSort = require('./mergeSort.js');
var quickSort = require('./quickSort.js');

console.log(quickSort([6,2,8,1,6,37,5]));
*/

var Heap = require('./heap.js');

var myHeap = new Heap();

myHeap.add(3);
console.log(myHeap.list);
myHeap.add(2);
console.log(myHeap.list);
myHeap.add(1);
console.log(myHeap.list);
myHeap.add(5);
console.log(myHeap.list);
myHeap.add(6);
console.log(myHeap.list);
myHeap.add(4);
console.log(myHeap.list);
myHeap.pop();
console.log(myHeap.list);
myHeap.pop();
console.log(myHeap.list);
myHeap.pop();
console.log(myHeap.list);
