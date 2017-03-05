// 快速排序

var quickSort = function (list, compare) {
    var compareFunction = compare || function (a, b) {
        if (a > b)  return 1;
        if (a == b)  return 0;
        if (a < b)  return -1;
    };

    if (!(list && list.length)) {
        return [];
    }
    
    function sort(list, lo, hi) {
        if (hi <= lo) {
            return;
        }
        let j = partition(list, lo, hi);
        fort(list, lo, j-1);
        fort(list, j+1, hi);
    }
    function partition(list, lo, hi) {
        let i = lo;
        let j = hi + 1;
        let middle = list[lo];

        while (true) {
            while (compareFunction(list[++i], middle) == -1) {
                if (i == hi) break;
            }
            while (compareFunction(middle, list[--j]) == -1) {
                if (j == lo) break;
            }
            if (i >= j) break;
            swap(list, i, j);
        }
        swap(list, lo, j);
        return j;
    }
    function swap(list, x, y) {
        // 交换元素
        let temp = list[x];
        list[x] = list[y];
        list[y] = temp;
    }

    return sort(list);
}

module.exports = quickSort;
