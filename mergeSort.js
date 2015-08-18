// 归并排序

var mergeSort = function (list, compare) {
    var compareFunciont = compare || function (a, b) {
        if (a > b)  return 1;
        if (a == b)  return 0;
        if (a < b)  return -1;
    };

    if (!(list && list.length)) {
        return [];
    }

    // 合并两个有序数组
    function merge(left, right) {
        var result = [];
        var leftLength = left.length;
        var rightLength = right.length;
        var leftPointer = 0;
        var rightPointer = 0;

        while (leftPointer < leftLength && rightPointer < rightLength) {
            if (compareFunciont(left[leftPointer], right[rightPointer]) < 0) {
                result.push(left[leftPointer]);
                leftPointer += 1;
            } else {
                result.push(right[rightPointer]);
                rightPointer += 1;
            }
        }
        
        if (leftPointer !== leftLength) {
            result = result.concat(left.slice(leftPointer));
        } else if (rightPointer !== rightLength) {
            result = result.concat(right.slice(rightPointer));
        }

        return result;
    }

    function sort(list) {
        if (list.length == 1) {
            return list;
        }

        var middle = Math.floor(list.length / 2);
        var left = sort(list.slice(0, middle));
        var right = sort(list.slice(middle));
        console.log(left);
        console.log(right);
        return merge(left, right);
    }

    return sort(list);
}

module.exports = mergeSort;
