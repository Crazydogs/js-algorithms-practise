// 最小堆

function Heap() {
    this.arr = [null];
    this.size = 0;
}

function leftIndex(index, heap) {
    return index * 2 > heap.size ? null : index * 2;
}
function rightIndex(index, heap) {
    return index * 2 + 1 >  heap.size ? null : index * 2 + 1;
}
function parentIndex(index) {
    return Math.floor(index / 2) || null;
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

Heap.prototype.sink = function sink(index) {
    let li = leftIndex(index, heap);
    let ri = rightIndex(index, heap);
    if (li || ri) {
        let left = this.arr[li];
        let right = this.arr[ri];
        let middle = this.arr[index];

        if (middle > Math.max(left, right)) {
            let mini = left > right ? ri : li;
            swap(arr, index, mini);
            this.sink(mini);
        } else {
            return;
        }
    } else {
        return;
    }
}
Heap.prototype.swim = function swim(index) {
    let pi = parentIndex(index);
    if (!pi) {
        return;
    }
    if (arr[index] < arr[pi]) {
        swap(arr, index, pi);
        this.swim(pi);
    }
}
Heap.prototype.add = function add(item) {
    this.size += 1;
    this.arr[this.size] = item;
    this.swim(size);
}
Heap.prototype.pop = function pop() {
    swap(arr, 1, this.size);
    let min = this.arr[this.size];
    this.arr[this.size] = null;
    this.size -= 1;
    this.sink(1);
}

module.exports = Heap;
