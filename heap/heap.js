// 最小堆
function Heap(lessFun) {
    this.arr = [null];
    this.size = 0;
    this.less = lessFun ? lessFun : function (a, b) {
        return a < b;
    };
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

Heap.prototype.sink = function sink(index) {
    let chile = index * 2;
    if (chile > this.size) {
        return;
    }
    if (chile + 1 <= this.size
        && this.less(this.arr[chile + 1], this.arr[chile])) {
        chile = chile + 1;
    }
    if (this.less(this.arr[chile], this.arr[index])) {
        console.log('hahah');
        swap(this.arr, index, chile);
        this.sink(chile);
    }
}
Heap.prototype.swim = function swim(index) {
    let pi = Math.floor(index / 2);
    if (pi < 1) {
        return;
    }
    if (this.less(this.arr[index], this.arr[pi])) {
        swap(this.arr, index, pi);
        this.swim(pi);
    }
}
Heap.prototype.add = function add(item) {
    this.size += 1;
    this.arr[this.size] = item;
    this.swim(this.size);
}
Heap.prototype.pop = function pop() {
    swap(this.arr, 1, this.size);
    let min = this.arr[this.size];
    this.arr[this.size] = undefined;
    this.size -= 1;
    this.sink(1);
    return min;
}
Heap.prototype.change = function change(index, val) {
    if (this.less(this.arr[index], val)) {
        this.arr[index] = val;
        this.sink(index);
    } else {
        this.arr[index] = val;
        this.swim(index);
    }
}

module.exports = Heap;
