// 基于链表的背包实现
var ListNode = require('./listNode.js');

var bag = function () {
    this.total = 0;
    this.first = null;
};

bag.prototype.add = function (item) {
    if (this.total === 0) {
        this.first = new ListNode(item);
    } else {
        var newFirst = new ListNode(item, this.first);
        this.first = newFirst;
    }
    this.total += 1;
};
bag.prototype.isEmpty = function () {
    return this.total === 0;
};
bag.prototype.size = function () {
    return this.total;
};
bag.prototype.iterator = function () {
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
}

module.exports = bag;
