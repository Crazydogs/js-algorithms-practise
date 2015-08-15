// 基于链表的栈实现
var ListNode = require('./listNode.js');

var stack = function () {
    this.total = 0;
    this.first = null;
}

stack.prototype.push = function (item) {
    if (this.total === 0) {
        this.first = new ListNode(item);
    } else {
        var newFirst = new ListNode(item, this.first);
        this.first = newFirst;
    }
    this.total += 1;
};
stack.prototype.pop = function () {
    if (this.total) {
        var result = this.first.content;
        this.first = this.first.next;
        this.total -= 1;
        return result;
    }
    return null;
};
stack.prototype.isEmpty = function () {
    return this.total === 0;
};
stack.prototype.size = function () {
    return this.total;
};
stack.prototype.iterator = function () {
    var self = this;
    return {
        pointer: self.first,
        next: function () {
            if (this.pointer) {
                var result = this.pointer.content;
                this.pointer = this.pointer.next;
                console.log(result);
                return result;
            }
            console.log('null');
            return null;
        }
    }
};

module.exports = stack;
