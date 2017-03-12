let Heap = require('./heap.js');

const testHeap = new Heap(function (a, b) {
    return a.weight < b.weight;
});

testHeap.add({weight: 5});
console.log(testHeap);
testHeap.add({weight: 1});
console.log(testHeap);
testHeap.add({weight: 3});
console.log(testHeap);
testHeap.add({weight: -1});
console.log(testHeap);
testHeap.add({weight: 0});
console.log(testHeap);

testHeap.pop();
console.log(testHeap);
