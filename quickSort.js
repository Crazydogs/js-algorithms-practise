// 快速排序

var quickSort = function (list, compare) {
    var compareFunciont = compare || function (a, b) {
        if (a > b)  return 1;
        if (a == b)  return 0;
        if (a < b)  return -1;
    };

    if (!(list && list.length)) {
        return [];
    }
    
    function sort(list) {
        if (list.length == 1) {
            return list
        }

        var middle = list[0];
        var left = [];
        var right = [];

        for (var i = 1; i < list.length; i++) {
            if (list[i] < middle) {
                left.push(list[i]);
            } else {
                right.push(list[i]);
            }
        }

        return sort(left).concat(middle, sort(right));
    }

    return sort(list);
}

module.exports = quickSort;
