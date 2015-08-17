// 选择排序

var selectSort = function (list, compare) {
    var compareFunciont = compare || function (a, b) {
        if (a > b)  return 1;
        if (a == b)  return 1;
        if (a < b)  return -1;
    };

    if (!(list && list.length)) {
        return [];
    }

    var sort = function () {
        for (var i = 0; i < list.length; i++) {
            var min = i;
            for (var j = i; j < list.length; j++) {
                if (list[j] < list[min]) min = j;
            }
            var temp = list[min];
            list[min] = list[i];
            list[i] = temp;
        }
        return list;
    }
}

module.exports = selectSort();
