/*
var mergeSort = require('./mergeSort.js');
var quickSort = require('./quickSort.js');

console.log(quickSort([6,2,8,1,6,37,5]));
*/

/*
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
*/

var BinarySearchTree = require('./binarySearchTree.js');
var myTree = new BinarySearchTree();

myTree.put({key: 2, val: 'test1'});
console.log(myTree.root);
myTree.put({key: 12, val: 'test12'});
console.log(myTree.root);
myTree.put({key: 0, val: 'test0'});
myTree.put({key: 2, val: 'test3'});
console.log('min:');
console.log(myTree.getMin());
myTree.put({key: 3, val: 'test5'});
console.log('max:');
console.log(myTree.getMax());
console.log('ceil:');
console.log(myTree.ceil());
console.log('floor:');
console.log(myTree.floor());

console.log(myTree.get(3));
console.log(myTree.get(2));
