// 基于链表的栈实现
var ListNode = require('./listNode.js');

var queue = function () {
    this.total = 0;
    this.first = null;
    this.last = null;
}

queue.prototype.push = function (item) {
    if (this.total === 0) {
        this.first = new ListNode(item);
        this.last = this.first;
    } else {
        var newLast = new ListNode(item, this.first);
        this.last.next = newLast;
        this.last = newLast;
    }
    this.total += 1;
};
queue.prototype.pop = function () {
    if (this.total) {
        var result = this.first.content;
        this.first = this.first.next;
        this.total -= 1;
        return result;
    }
    return null;
};
queue.prototype.isEmpty = function () {
    return this.total === 0;
};
queue.prototype.size = function () {
    return this.total;
};
queue.prototype.iterator = function () {
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

module.exports = queue;
