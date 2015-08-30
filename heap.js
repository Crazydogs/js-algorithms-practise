// 最小堆的数组实现

var Heap = function () {
    this.list = [];
    this.length = 0;
}

Heap.prototype.add = function (item) {
    this.list[this.length + 1] = item;
    this.length += 1;
    this.float(this.length);
}
Heap.prototype.pop = function () {
    if (this.length < 1) {
        return null;
    }
    this.list[1] = this.list[this.length];
    this.list[this.length] = null;
    this.length -= 1;
    this.sink(1);
}

Heap.prototype.sink = function (index) {
    var list = this.list;
    while (1) {
        var leftIndex = this.getLeft(index);
        var rightIndex = this.getRight(index);

        var isBottom = true;
        if (!leftIndex && !rightIndex) {
            return;
        }
        if (leftIndex && list[index] > list[leftIndex]) {
            isBottom = false;
            var temp = list[index];
            list[index] = list[leftIndex];
            list[leftIndex] = temp;
        }
        if (rightIndex && list[index] > list[rightIndex]) {
            isBottom = false;
            var temp = list[index];
            list[index] = list[rightIndex];
            list[rightIndex] = temp;
        }
        if (isBottom) {
            return;
        }
    }
}
Heap.prototype.float = function (index) {
    var list = this.list;
    while (1) {
        if (!index || index == 1) {
            return;
        }
        var isTop = true;
        parentIndex = this.getParent(index);
        if (list[index] < list[parentIndex]) {
            var temp = list[index];
            list[index] = list[parentIndex];
            list[parentIndex] = temp;
            isTop = false;
        }
        if (isTop) {
            return;
        }
    }
}
Heap.prototype.getLeft = function (index) {
    var result = index * 2;
    return result > this.length ? 0 : result;
}
Heap.prototype.getRight = function (index) {
    var result = index * 2 + 1;
    return result > this.length ? 0 : result;
}
Heap.prototype.getParent = function (index) {
    if (index <= 1) {
        return 0;
    }
    return Math.floor(index/2);
}

module.exports = Heap;
