var Bag = require('./bagByList.js');
var Stack = require('./stackByList.js');

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
myStack.push(4);

var iterator = myStack.iterator();
while(iterator.next()) {
}
